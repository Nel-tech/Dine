import React, { useState, useEffect } from 'react';
import NavForm from '../../Components/NavForm';
import BaseFooter from '../../Components/BaseFooter';
import { reserveForm } from '../../Services/Cart/CartServices';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/Context/AuthContext';
import { toast } from "sonner";


export type ReservationFormProps = {
  name: string;
  date: string;
  time: string;
  people: number;
};

function ReservationForm() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [Reserve, setReservation] = useState<ReservationFormProps>({
    name: '',
    time: '',
    date: '',
    people: 0,
  });

  const {user} = useAuth()
  useEffect(() => {
    if (user) {
      setUserEmail(user.email || '');
    }
  }, [user]); // Re-run when `user` changes


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
      toast.info('Please select a current or future date.');
    } else {
      setReservation((prev) => ({
        ...prev,
        date: e.target.value,
      }));
    }
  };


  


  const handlePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = Number(e.target.value);
    if (count <= 0) {
      toast.info('Number of people must be at least 1');
    } else {
      setReservation((prev) => ({
        ...prev,
        people: count,
      }));
    }
  };
   const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.info('You are not authenticated yet');
      return;
    }

    if (!Reserve.name || !Reserve.date || !Reserve.time || Reserve.people <= 0) {
       toast.info('Please fill in all reservation details.');
      return;
    }

    try {
      await reserveForm(user.uid, Reserve);
     toast.info('Reservation confirmed!');
      navigate('/summary'); // Use lowercase `navigate`
    } catch (error) {
      console.error('Error confirming reservation:', error);
      toast.info('Failed to confirm the reservation. Please try again.');
    }
  };


 useEffect(() => {
  if (user?.email) {
    setUserEmail(user.email);
  }
}, [user]); 


  return (
    <main>
      <NavForm />
      <section className="mx-auto w-full px-4 py-[5rem]">
        <h1 className="mx-auto text-center text-[2rem] text-[#AD343E] xs:text-[1.2rem] xs:font-semibold mobile:text-[1.5rem] mobile:font-semibold">
          Book A Table
        </h1>
        <p className="mx-auto max-w-[30rem] pb-[.9rem] text-center xs:text-[.9rem] mobile:text-[1rem]">
          We can’t wait to host you. Reserve your table now and prepare for an
          unforgettable dining experience.
        </p>

        <article className="mx-auto w-[30rem] rounded-lg bg-[#F9F9F7] pb-[4rem] xs:w-[18rem] mobile:w-[22rem]">
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

            {/* Time Input */}
            <div className="mb-6 px-[2rem]">
              <label htmlFor="time">
                Pick A Time <span className='text-[.8rem]'>⚠️(9:00AM - 10:00PM)</span>
              </label>
              <div className="relative">
                <input
                  type="time"
                  name="time"
                  id="time"
                  required
                  value={Reserve.time}
                  onChange={handleChange}
                  className="block w-full rounded border border-gray-300 px-3 py-1 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                
              </div>
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
      <BaseFooter />
    </main>
  );
}

export default ReservationForm;
