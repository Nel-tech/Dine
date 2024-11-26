// src/Firebase/Auth/authService.ts

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../Auth/config';
import { FirebaseError } from 'firebase/app';

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
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('The email is already in use. Please log in instead.');
      }
      console.error('Error signing up:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
};

// Sign in function
export const signin = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('User signed in:', userCredential.user);
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/invalid-credential') {
        throw new Error('Invalid Email or password.');
      }
      console.error('Error signing up:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
};

// Sign out function
export const signout = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.error('Error signing up:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
};
