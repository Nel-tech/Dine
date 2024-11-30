import { useState, useEffect } from "react";
import NavForm from "../../Components/NavForm";
import { getReservationForm } from "../../Services/Cart/CartServices";
import { ReservationFormProps, UserProps } from "../Reservations/ReservationForm";
import BaseFooter from "../../Components/BaseFooter";
import { getCartItems } from "../../Services/Cart/CartServices";


function Summary({ userId }: UserProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cart, setCart] = useState<any[]>([]); // Adjust the type if necessary
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [Summary, setSummary] = useState<ReservationFormProps>({
    name: '',
    date: '',
    time: '',
    people: 0,
  });

  // Fetch reservation summary
  useEffect(() => {
    const handleSummary = async () => {
      try {
        const result = await getReservationForm(userId);
        if (result) {
          setSummary(result);
        }
      } catch (error) {
        console.error("Error fetching summary:", error);
      }
    };
    handleSummary();
  }, [userId]);

  // Fetch cart items
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartData = await getCartItems(userId); // Pass userId to get cart items
        setCart(cartData);

        // Calculate total price
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const total = cartData.reduce((acc: number, item: any) => acc + item.BasePrice, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  return (
    <section>
      <NavForm />

      <div className="max-w-2xl mx-auto my-6 p-6 rounded-lg border border-gray-200 bg-white shadow-lg">
        {/* Title */}
        <h2 className="text-xl font-bold text-[#AD343E] mt-[2rem] text-center">Reservation Summary</h2>

        {/* Reservation Details */}
        <div className="mb-4 mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Reservation Details</h3>
          <p className="text-gray-600">Date: <span className="font-medium">{Summary.date}</span></p>
          <p className="text-gray-600">Time: <span className="font-medium">{Summary.time}</span></p>
          <p className="text-gray-600">Number of People: <span className="font-medium">{Summary.people}</span></p>
        </div>

        {/* User Details */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Guest Information</h3>
          <p className="text-gray-600">Name: <span className="font-medium">{Summary.name}</span></p>
        </div>

        {/* Cart Items */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Cart Items</h3>
          <ul className="space-y-3">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center border-b pb-2">
                  <span>{item.Name}</span> 
                  <span>₦{item.BasePrice}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-600">No items in the cart</p>
            )}
          </ul>
        </div>

        {/* Total Price */}
        <div className="mb-4 flex justify-between self-center items-center">
          <h3 className="text-lg font-semibold text-gray-800">Total Price</h3>
          <p className="text-gray-600">
            <span className=" font-bold">₦{totalPrice}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center xs:flex-col xs:gap-3 sm:flex-col sm:gap-3">
         
          <button
            type="button"
            className="px-6 py-2 bg-[#AD343E] text-white rounded-lg hover:bg-[#9A2D34] transition-all duration-200"
          >
            Confirm Reservation
          </button>
        </div>
      </div>

      <BaseFooter />
    </section>
  );
}

export default Summary;
