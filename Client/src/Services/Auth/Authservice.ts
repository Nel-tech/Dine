// src/Firebase/Auth/authService.ts

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../Auth/config';
import { FirebaseError } from 'firebase/app';
import { sendEmail } from '../../Pages/Email/Email';
import { getDoc,setDoc,doc } from 'firebase/firestore';
import { db } from '../Auth/config';

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
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Fetch user role from Firestore
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      console.log('User Role:', userData.role);

      // If the user is not an admin and tries to access an admin route, log them out
      if (userData.role === 'admin') {
        console.log('Admin logged in:', userData.email);
      } else {
        console.log('Regular user logged in:', userData.email);
      }

      return {
        role: userData.role,
        email: userData.email,
      };
    } else {
      throw new Error('User data not found');
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error signing in:', error.message);

    if (error.code === 'auth/invalid-credential') {
      throw new Error('Invalid email or password.');
    }

    return null;
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
