import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs
} from 'firebase/firestore';
import { db } from '../Auth/config';
import { Dish } from '../../Pages/Menu/Menu';
import { ReservationFormProps } from '../../Pages/Reservations/ReservationForm';

// Add item to cart
export const addToCart = async (
  userId: string | null,
  itemId: string,
  itemData: Dish
) => {
  if (!userId) {
    alert('You must be logged in to add items to the cart.');
    return;
  }
  try {
    // Construct the document reference properly
    const cartRef = doc(db, `users/${userId}/cart`, itemId);
    console.log('Firestore Path:', `users/${userId}/cart/${itemId}`);
    await setDoc(cartRef, itemData);
    console.log('Item added to cart successfully!');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};



// Remove item from cart
export const removeFromCart = async (userId: string | null, itemId: string) => {
  if (!userId) {
    console.error('Error: User not authenticated.');
    return;
  }
  try {
    const cartRef = doc(db, `users/${userId}/cart/${itemId}`);
    await deleteDoc(cartRef);
    console.log('Item removed from cart successfully!');
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

// Save reservation form
export const reserveForm = async (
  userId: string | null,
  formData: ReservationFormProps
): Promise<void> => {
  if (!userId) {
    console.error('Error: User not authenticated.');
    return;
  }
  try {
    // Define the path to the user's reservations subcollection
    const reservationRef = doc(db, `users/${userId}/reservations/${userId}`);

    // Save the reservation
    await setDoc(reservationRef, {
      ...formData,
    });

    console.log('Reservation saved successfully for user:', userId);
  } catch (error) {
    console.error('Error saving reservation:', error);
    throw error;
  }
};

// Get reservation form
export const getReservationForm = async (
  userId: string
): Promise<ReservationFormProps | null> => {
  if (!userId) {
    console.error('User ID is required to fetch reservation form.');
    return null;
  }

  try {
    const docRef = doc(db, `users/${userId}/reservations/${userId}`);
    console.log('Firestore Path:', `users/${userId}/reservations/${userId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Reservation Data:', docSnap.data());
      return docSnap.data() as ReservationFormProps; // Return reservation data
    } else {
      console.log('No reservation document found!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching reservation document:', error);
    throw error;
  }
};

export const getCartItems = async (userId: string) => {
  console.log(`Fetching cart items for user: ${userId}`); // Log userId
  try {
    const cartRef = collection(db, `users/${userId}/cart`);
    const cartSnapshot = await getDocs(cartRef);

    if (cartSnapshot.empty) {
      console.warn('Cart is empty');
      return [];
    }

    const items = cartSnapshot.docs.map((doc) => ({
      Name: doc.data().Name,
      BasePrice: doc.data().BasePrice, 
      Picture: doc.data().Picture, 
      ...doc.data(),
    }));

    console.log('Cart items fetched:', items); 
    return items;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};



