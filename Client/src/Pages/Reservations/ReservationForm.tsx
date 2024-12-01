import React, { useState, useEffect } from 'react';
import NavForm from '../../Components/NavForm';
import BaseFooter from '../../Components/BaseFooter';
import { getCurrentUser } from '../../Services/Auth/Authservice'; // Fetch current user email
import { reserveForm } from '../../Services/Cart/CartServices';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export type ReservationFormProps = {
  name: string;
  date: string;
  people: number;
};

function ReservationForm() {
  const Navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [Reserve, setReservation] = useState<ReservationFormProps>({
    name: '',
    date: '',
    people: 0,
  });
useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUserId(user?.uid || null);
    });

    return () => unsubscribeAuth();
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate < currentDate) {
      window.alert('Please select a current or future date.');
    } else {
      handleChange(e);
    }
  };

  const handlePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = Number(e.target.value);
    if (count < 0) {
      window.alert('Invalid Number');
    } else {
      handleChange(e);
    }
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await reserveForm(userId, Reserve); // Passing reserve object as the second argument
      alert('Reservation confirmed!');
      Navigate('/summary');
    } catch (error) {
      console.error('Error confirming reservation:', error);
      alert('There was an error confirming your reservation.');
    }
  };

  useEffect(() => {
    const fetchEmail = async () => {
      const email = await getCurrentUser();
      if (email) {
        setUserEmail(email);
      }
    };
    fetchEmail();
  }, []);

  return (
    <main>
      <NavForm />
      <section className="mx-auto w-full px-4 py-[5rem]">
        <h1 className="mx-auto text-center text-[2rem] text-[#AD343E] xs:text-[1.2rem] xs:font-semibold sm:text-[1.5rem] sm:font-semibold">
          Book A Table
        </h1>
        <p className="mx-auto max-w-[30rem] pb-[.9rem] text-center xs:text-[.9rem] sm:text-[1rem]">
          We can’t wait to host you. Reserve your table now and prepare for an
          unforgettable dining experience.
        </p>

        <article className="mx-auto w-[30rem] rounded-lg bg-[#F9F9F7] pb-[4rem] xs:w-[18rem] sm:w-[22rem]">
          <form className="mx-auto pt-[3rem]" onSubmit={handleForm}>
            {/* Name Input */}
            <div className="mb-6 px-[2rem]">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name" // Make sure the 'name' matches the property in the state
                id="name"
                required
                value={Reserve.name}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 px-3 py-1 text-gray-800 focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email (disabled, auto-filled) */}
            <div className="mb-6 px-[2rem]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={userEmail}
                readOnly
                className="block w-full rounded border border-gray-300 px-3 py-1 text-gray-800 focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Date Input */}
            <div className="mb-6 px-[2rem]">
              <label htmlFor="date">Pick A Date</label>
              <input
                type="date"
                name="date" // Name must match the 'date' in the state
                id="date"
                required
                value={Reserve.date}
                onChange={handleDateChange}
                className="block w-full rounded border border-gray-300 px-3 py-1 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Number of People */}
            <div className="mb-6 px-[2rem]">
              <label htmlFor="people">Number Of People</label>
              <input
                type="number"
                name="people" // Name must match 'people' in the state
                id="people"
                required
                value={Reserve.people}
                onChange={handlePeople}
                className="block w-full rounded border border-gray-300 px-3 py-1 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <div className="mx-auto text-center">
              <button
                type="submit"
                className="mt-4 rounded bg-[#AD343E] px-4 py-2 text-white"
              >
                Confirm
              </button>
            </div>
          </form>
        </article>
      </section>
     <BaseFooter/>
    </main>
  );
}

export default ReservationForm;
