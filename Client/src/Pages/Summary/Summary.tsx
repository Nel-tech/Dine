import { useState, useEffect } from "react";
import NavForm from "../../Components/NavForm";
import BaseFooter from "../../Components/BaseFooter";
import { getCartItems, getReservationForm } from "../../Services/Cart/CartServices";
import { Dish } from "../Menu/Menu";
import PaystackPayment from '../../Components/Payments';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Context/AuthContext';

function Summary() {
  const [cartItems, setCartItems] = useState<Dish[]>([]);
  const [summary, setSummary] = useState({
    name: '',
    date: '',
    people: 0,
  });

  const { user } = useAuth(); // Get authenticated user
  const navigate = useNavigate();
  const email = user?.email || ""; // Ensure email is set correctly

  useEffect(() => {
    if (!user) return; // Ensure user is authenticated

    const fetchData = async () => {
      try {
        const items = await getCartItems(user.uid); // Use `user.uid`
        setCartItems(items);

        const result = await getReservationForm(user.uid);
        if (result) {
          setSummary(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user]);

  const totalAmount = cartItems.reduce((total, item) => total + item.BasePrice, 0);

  const handlePaymentSuccess = (paymentRef: string) => {
    navigate(`/receipt/${paymentRef}`);
  };

  return (
    <section className="bg-gray-100 min-h-screen">
      <NavForm />

      <div className="max-w-3xl mx-auto my-8 p-8 rounded-lg shadow-lg bg-white border border-gray-300">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#AD343E] text-center mb-6">Reservation Summary</h2>

        {/* Reservation Details */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reservation Details</h3>
          <p className="text-lg text-gray-600">
            Date: <span className="font-medium text-gray-900">{summary.date}</span>
          </p>
          <p className="text-lg text-gray-600">
            Number of People: <span className="font-medium text-gray-900">{summary.people}</span>
          </p>
        </div>

        {/* User Details */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Guest Information</h3>
          <p className="text-lg text-gray-600">
            Name: <span className="font-medium text-gray-900">{summary.name}</span>
          </p>
          <p className="text-lg text-gray-600">
            Email: <span className="font-medium text-gray-900">{email}</span>
          </p>
        </div>

        {/* Cart Items */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cart Items</h3>
          {cartItems.length > 0 ? (
            <ul className="space-y-2">
              {cartItems.map(item => (
                <li key={item.Name} className="flex justify-between self-center items-center">
                  <h1 className="text-gray-600 text-lg">{item.Name}</h1>
                  <p className="font-bold text-[#9A2D34] text-xl">₦{item.BasePrice}</p>
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
          <p className="text-xl font-bold text-[#9A2D34]">₦{totalAmount}</p>
        </div>

        {/* Payment Button */}
        <div className="flex justify-center items-center">
          {user?.uid ? ( // Use `user?.uid`
            <PaystackPayment
              amount={totalAmount}
              email={email}
              userId={user.uid} // Corrected: `user.uid`
              onSuccess={handlePaymentSuccess}
            />
          ) : (
            <button
              type="button"
              className="px-8 py-3 bg-gray-400 text-white text-lg font-semibold rounded-lg cursor-not-allowed"
              disabled
            >
              Please log in to make payment
            </button>
          )}
        </div>
      </div>

      <BaseFooter />
    </section>
  );
}

export default Summary;
