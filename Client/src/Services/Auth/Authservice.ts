// src/Firebase/Auth/authService.ts

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { sendEmail } from '../../Pages/Email/Email';
import { getDoc,setDoc,doc } from 'firebase/firestore';
import { db,auth } from '../Auth/config';

export const signup = async (
  email: string,
  password: string,
  passwordConfirm: string
): Promise<void> => {
  if (password !== passwordConfirm) {
    throw new Error('Passwords do not match');
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('User signed up:', userCredential.user);

    // Store user role as "user" in Firestore (no admin sign-ups)
    const userRef = doc(db, 'users', userCredential.user.uid);
    await setDoc(userRef, {
      email,
      role: 'user', // Only allow "user" role on signup
      createdAt: new Date(),
    });

    // Send welcome email
    const userEmail = userCredential.user.email;
    if (userEmail) {
      await sendEmail(userEmail);
      console.log('Welcome email sent successfully');
    } else {
      throw new Error('User email is null');
    }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('The email is already in use. Please log in instead.');
      }
      console.error('Error signing up:', error.message);
    } else {
      console.error('Unknown error:', error);
      throw error;
    }
  }
};





  export const signin = async (
  email: string,
  password: string
): Promise<{ role: string; email: string } | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user) {
      throw new Error("User authentication failed.");
    }

    let role = "user"; // Default role
    let userData = null;

    // Check Admin collection
    const adminRef = doc(db, "Admin", user.uid);
    const adminSnap = await getDoc(adminRef);

    if (adminSnap.exists()) {
      userData = adminSnap.data();
      role = "admin";
    } else {
      // Check Users collection
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        userData = userSnap.data();
        role = "user";
      } else {
        console.error("User not found in Firestore.");
        throw new Error("User data not found.");
      }
    }

    console.log(`User Role: ${role}`);

    return {
      role,
      email: userData?.email || email, // Ensure email is always available
    };
  } catch (error: any) {
    console.error("Error signing in:", error.message);

    if (error.code === "auth/invalid-credential") {
      throw new Error("Invalid email or password.");
    }

    throw error;
  }
};



// Sign out function
export const signout = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('User signed out successfully');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error signing out:', error.message || error);
  }
};
