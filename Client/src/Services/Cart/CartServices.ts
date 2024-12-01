import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
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
    const cartRef = doc(collection(db, `users/${userId}/cart`), itemId);
    await setDoc(cartRef, itemData);
    console.log('Item added to cart successfully!');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

// Update cart item based on add-ons
export const updateCartItem = async (
  userId: string | null,
  itemId: string,
  itemData: Dish
) => {
  if (!userId) {
    console.error('Error: User not authenticated.');
    return;
  }
  try {
    const cartRef = doc(db, `users/${userId}/cart/${itemId}`);
    await updateDoc(cartRef, itemData);
    console.log('Cart item updated successfully!');
  } catch (error) {
    console.error('Error updating cart item:', error);
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
) => {
  if (!userId) {
    console.error('Error: User not authenticated.');
    return;
  }
  try {
    // Generate a unique ID for the reservation
    const reservationRef = doc(collection(db, 'reservations'));
    await setDoc(reservationRef, {
      ...formData,
      userId,
      createdAt: Date.now(),
    });
    console.log('Reservation saved successfully!');
  } catch (error) {
    console.error('Error saving reservation:', error);
    throw error;
  }
};

// Get reservation form
export const getReservationForm = async (
  userId: string
): Promise<ReservationFormProps | null> => {
  try {
    const docRef = doc(db, `reservations/${userId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Reservation Data:', docSnap.data());
      return docSnap.data() as ReservationFormProps;
    } else {
      console.log('No reservation found!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching reservation form:', error);
    throw error;
  }
};

export const getCartItems = async (userId: string | null): Promise<Dish[]> => {
  if (!userId) {
    console.error('Error: User not authenticated.');
    return [];
  }

  try {
    const cartRef = collection(db, `users/${userId}/cart`);
    const cartSnapshot = await getDocs(cartRef);

    if (!cartSnapshot.empty) {
      const cartItems = cartSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          Name: data.Name,
          BasePrice: data.BasePrice,
          Picture: data.Picture,
        } as Dish;
      });
      console.log('Cart Items:', cartItems);
      return cartItems;
    } else {
      console.log('No items found in the cart.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};
