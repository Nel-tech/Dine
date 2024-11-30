import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../Auth/config';
import { Dish } from '../../Pages/Menu/Menu';
import { ReservationFormProps } from '../../Pages/Reservations/ReservationForm';
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
  await updateDoc(cartRef, itemData);
};

// Remove item from cart
export const removeFromCart = async (userId: string, itemId: string) => {
  const cartRef = doc(db, `users/${userId}/cart/${itemId}`);
  await deleteDoc(cartRef);
};

export const reserveForm = async (
  userId: string,
  formData: ReservationFormProps
) => {
  try {
    const cartRef = doc(db, `reservations/${userId}`); // Specify unique ID
    await setDoc(cartRef, formData); // Save the reservation form
    console.log('Reservation saved successfully!');
  } catch (error) {
    console.error('Error saving reservation:', error);
    throw error;
  }
};

export const getReservationForm = async (
  userId: string
): Promise<ReservationFormProps | null> => {
  try {
    const docRef = doc(db, `reservations/${userId}`); // Reference to a specific document
    const docSnap = await getDoc(docRef); // Get the document snapshot

    if (docSnap.exists()) {
      console.log('Document Data:', docSnap.data());
      return docSnap.data() as ReservationFormProps; // Return the document data
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    throw error;
  }
};
