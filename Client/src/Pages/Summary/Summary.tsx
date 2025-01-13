import { useState, useEffect } from "react";
import NavForm from "../../Components/NavForm";
import BaseFooter from "../../Components/BaseFooter";
import { getCartItems, getReservationForm } from "../../Services/Cart/CartServices";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Dish } from "../Menu/Menu";

function Summary() {
  const [cartItems, setCartItems] = useState<Dish[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [summary, setSummary] = useState({
    name: '',
    date: '',
    people: 0,
  });

  // Listen for user authentication state change
  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUserId(user?.uid || null);
    });

    return () => unsubscribeAuth();
  }, []);

  // Fetch cart items and reservation summary when userId is available
  useEffect(() => {
    if (!userId) return; // If userId is null, do nothing

    const fetchData = async () => {
      try {
        // Fetch cart items
        const items = await getCartItems(userId);
        setCartItems(items);

        // Fetch reservation summary
        const result = await getReservationForm(userId);
        if (result) {
          setSummary(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <section className="bg-gray-100 min-h-screen">
      <NavForm />

      <div className="max-w-3xl mx-auto my-8 p-8 rounded-lg shadow-lg bg-white border border-gray-300">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#AD343E] text-center mb-6">Reservation Summary</h2>

        {/* Reservation Details */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reservation Details</h3>
          <p className="text-lg text-gray-600">Date: <span className="font-medium text-gray-900">{summary.date}</span></p>
         
          <p className="text-lg text-gray-600">Number of People: <span className="font-medium text-gray-900">{summary.people}</span></p>
        </div>

        {/* User Details */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Guest Information</h3>
          <p className="text-lg text-gray-600">Name: <span className="font-medium text-gray-900">{summary.name}</span></p>
        </div>

        {/* Cart Items */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cart Items</h3>
          {cartItems.length > 0 ? (
            <ul className="space-y-2">
              {cartItems.map(item => (
                <li key={item.Name} className=" flex justify-between self-center items-center ">
                  <h1 className="text-gray-600 text-lg">{item.Name}</h1> 
                  <p className="font-bold text-[#9A2D34] text-xl"> ₦{item.BasePrice}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Total Price */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-800">Total Price</h3>
          <p className="text-xl font-bold text-[#9A2D34]">
            ₦{cartItems.reduce((total, item) => total + item.BasePrice, 0)}
          </p>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex justify-center items-center">
          <button
            type="button"
            className="px-8 py-3 bg-[#AD343E] text-white text-lg font-semibold rounded-lg hover:bg-[#9A2D34] transition-all duration-200"
          >
            Confirm Reservation
          </button>
        </div> */}
      </div>

      <BaseFooter />
    </section>
  );
}

export default Summary;
