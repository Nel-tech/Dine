import { useState } from 'react';
import { MenuData } from '../../Helpers/Data';
import NavForm from "../../Components/NavForm"

function Menu() {
  const [Category, setCategory] = useState('');

  const filteredMenu = Category
    ? MenuData.filter((menu) => menu.Category === Category)
    : MenuData;

  return (
    <div>
          <NavForm/>

    <main className="container flex flex-col items-center mt-[6rem] ">
      <div className="flex flex-wrap gap-4 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide px-4 xs:overflow-x-auto xs:whitespace-nowrap xs:hide">
        <button
          onClick={() => setCategory('')}
          className={`border-2 rounded-full px-6 py-2 text-[#AD343E] border-[#AD343E] hover:bg-[#AD343E] hover:text-white transition-all duration-300 ease-in-out ${
            Category === '' ? 'bg-[#AD343E] text-white' : ''
          } `}
        >
          All
        </button>

        {MenuData.map((menu) => (
          <button
            key={menu.id}
            onClick={() => setCategory(menu.Category)}
            className={`border-2 rounded-full px-6 py-2 text-[#AD343E] border-[#AD343E] hover:bg-[#AD343E] hover:text-white transition-all duration-300 ease-in-out ${
              Category === menu.Category ? 'bg-[#AD343E] text-white' : ''
            }`}
          >
            {menu.Category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-between gap-4 m-[2rem] ">
        {filteredMenu.map((menu) => (
          <section key={menu.id} className="w-full">
            <div className="flex flex-wrap justify-between gap-4 xs:flex-col sm:flex-col">
              {menu.Dishes.map((dish) => (
                <div
                  key={dish.Name}
                  className="w-[30%] p-4 border rounded-lg shadow-md flex flex-col items-center xs:w-[100%]  sm:w-[100%]"
                >
                  <img
                    src={dish.Picture}
                    alt={dish.Name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h1 className="text-lg font-bold text-center">{dish.Name}</h1>
                  <p className="text-gray-600 text-center">{dish.BasePrice}</p>

                  <div className="mt-3">
                    {/* <h2 className={`text-md font-semibold `}>
                      Customize Your Meal:
                    </h2> */}
                    {dish.AddOns.map((option, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={option.Name}
                          value={option.Price}
                          className="form-checkbox"
                        />
                        <label htmlFor={option.Name}>
                          {option.Name} - {option.Price}
                        </label>
                      </div>
                    ))}
                  </div>

                  <button className="mt-4 px-4 py-2 bg-[#AD343E] text-white rounded">
                    Make Reservation
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
    </div>
  );
}

export default Menu;
