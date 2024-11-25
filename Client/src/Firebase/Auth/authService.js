import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {} from 'firebase/auth';
import { auth } from './firebase';

export const Signup = async (email, password) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Signup', newUser.user);
  } catch (err) {
    console.error('Signup error:', err.message);
  }
};

export const Signin = async (email, password) => {
  try {
    const ExistingUser = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(ExistingUser.user);
  } catch (error) {
    console.log(error.message);
  }
};

export const LogOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};
