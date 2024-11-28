import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../Auth/config';
import { Dish } from '../../Pages/Menu/Menu';

// Add item to cart
export const addToCart = async (
  userId: string,
  itemId: string,
  itemData: Dish
) => {
  const cartRef = doc(collection(db, `users/${userId}/cart`), itemId);
  await setDoc(cartRef, itemData);
};

// Update Base on addons
export const updateCartItem = async (
  userId: string,
  itemId: string,
  itemData: Dish
) => {
  const cartRef = doc(db, `users/${userId}/cart/${itemId}`);
  await updateDoc(cartRef,  itemData);
};

// Remove item from cart
export const removeFromCart = async (userId: string, itemId: string) => {
  const cartRef = doc(db, `users/${userId}/cart/${itemId}`);
  await deleteDoc(cartRef);
};


