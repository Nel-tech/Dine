import { useState, useEffect } from 'react';
import { MenuData } from '../../Helpers/Data';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { addToCart, removeFromCart } from '../../Services/Cart/CartServices';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../Services/Auth/config';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { toast } from 'sonner';

export type Dish = {
  Name: string;
  BasePrice: number;
  image: string;
  Category: string;
};

function Menu() {
  const [Category, setCategory] = useState('');
  const [cartItems, setCartItems] = useState<Dish[]>([]);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [firebaseFoods, setFirebaseFoods] = useState<Dish[]>([]);

  const { user } = useAuth();

  // Fetch foods from Firestore
 useEffect(() => {
  const foodRef = collection(db, 'foods');
  const unsubscribe = onSnapshot(foodRef, (snapshot) => {
    const foodsFromDB: Dish[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        Name: data.name,
        BasePrice: data.price,
        image: data.imageURL || '', // Ensure correct image path
        Category: data.category,
      };
    });

    setFirebaseFoods(foodsFromDB);
  });

  return () => unsubscribe();
}, []);


  // Merge local menu data with Firestore data
  const mergedMenu = MenuData.map((menuCategory) => {
    const firebaseCategoryItems = firebaseFoods.filter(
      (food) => food.Category === menuCategory.Category
    );

    return {
      ...menuCategory,
      Dishes: [...menuCategory.Dishes, ...firebaseCategoryItems],
    };
  });

  // Filtered menu based on selected category
  const filteredMenu = Category
    ? mergedMenu.filter((menu) => menu.Category === Category)
    : mergedMenu;

  // Fetch real-time cart data
useEffect(() => {
  if (!user) return;

  const cartRef = collection(db, `users/${user.uid}/cart`);
  const unsubscribe = onSnapshot(cartRef, (snapshot) => {
    const items = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        Name: data.Name,
        BasePrice: data.BasePrice,
        image: data.image || '',  // Ensure image is retrieved
        Category: data.Category || 'Uncategorized',
      };
    });

    setCartItems(items as Dish[]);
  });

  return () => unsubscribe();
}, [user]);


 const handleAddToCart = async (dish: Dish) => {
  if (!user) {
    toast.error('You need to log in to add items to the cart.');
    return;
  }

  if (cartItems.some((item) => item.Name === dish.Name)) {
    toast.info(`${dish.Name} is already in your cart.`);
    return;
  }

  try {
    await addToCart(user.uid, dish.Name, {
      Name: dish.Name,
      BasePrice: dish.BasePrice,
      image: dish.image || '',  // Ensure image is never undefined
      Category: dish.Category || 'Uncategorized',
    });

    toast.success(`${dish.Name} added to the cart.`);
  } catch (error) {
    console.error('Error adding to cart:', error);
    toast.error('Failed to add item to the cart.');
  }
};



  // Remove item from cart
  const removeCart = async (dish: Dish) => {
    if (!user) {
      toast.error('You need to log in to remove items from the cart.');
      return;
    }

    try {
      await removeFromCart(user.uid, dish.Name);
      toast.success(`${dish.Name} removed from the cart.`);
    } catch (error) {
      console.error('Error removing item:', error);
      toast.error('Failed to remove item from the cart.');
    }
  };

  useEffect(() => {
    const totalCost = cartItems.reduce(
      (accumulator, item) => accumulator + item.BasePrice,
      0
    );
    setTotal(totalCost);
  }, [cartItems]);

  return (
    <div>
      <header className="fixed top-0 z-50 w-full bg-white shadow-md">
        <nav className="flex items-center justify-between px-6 py-4">
          <a href="/">
            <h1 className="text-2xl font-extrabold text-[#AD343E]">Dine</h1>
          </a>

          <FaShoppingCart
            className="h-[2rem] w-[2rem] cursor-pointer text-[#AD343E]"
            onClick={() => setIsOpen(!isOpen)}
          />
        </nav>
      </header>

      <main className="mt-[6rem]">
        <div className="relative mb-8 overflow-x-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCategory('')}
              className={`rounded-full border-2 border-[#AD343E] px-6 py-2 text-[#AD343E] transition-all duration-300 ease-in-out hover:bg-[#AD343E] hover:text-white ${
                Category === '' ? 'bg-[#AD343E] text-white' : ''
              }`}
            >
              All
            </button>

            {mergedMenu.map((menu) => (
              <button
                key={menu.Category}
                onClick={() => setCategory(menu.Category)}
                className={`rounded-full border-2 border-[#AD343E] px-6 py-2 text-[#AD343E] transition-all duration-300 ease-in-out hover:bg-[#AD343E] hover:text-white ${
                  Category === menu.Category ? 'bg-[#AD343E] text-white' : ''
                }`}
              >
                {menu.Category}
              </button>
            ))}
          </div>
        </div>

        <div className="m-[2rem] flex flex-wrap justify-between gap-4">
          {filteredMenu.map((menu) => (
            <section key={menu.Category} className="w-full">
              <div className="flex flex-wrap justify-between gap-4">
                {menu.Dishes.map((dish) => (
                  <div
                    key={dish.Name}
                    className="flex w-[30%] flex-col items-center rounded-lg p-4 shadow-md"
                  >
                    <img
                      src={dish.image}
                      alt={dish.Name}
                      className="mb-4 h-40 w-full rounded-lg object-cover"
                    />
                    <h1 className="text-center text-lg font-bold">
                      {dish.Name}
                    </h1>
                    <p className="text-center text-gray-600">
                      ₦{dish.BasePrice}
                    </p>

                    <button
                      className="mt-4 rounded bg-[#AD343E] px-4 py-2 text-white transition-colors hover:bg-[#8b2a34]"
                      onClick={() => handleAddToCart(dish)}
                    >
                      Order
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

        {  isOpen && (
        <div className="fixed right-8 top-16 w-[20rem] rounded-lg border bg-white p-4 shadow-lg xs:w-[15rem] tablet:right-[1rem]">
          <h2 className="mb-4 text-xl font-semibold text-[#AD343E]">Cart</h2>
          <div className="my-[3rem]">
            {/* Iterate through cartItems */}
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b p-2 last:border-none"
                >
                  <div className="flex items-center gap-[3rem] self-center">
                    <img
                      src={item.image}
                      alt={item.Name}
                      className="h-[3rem] w-[3rem] rounded-md object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.Name}</p>
                      <p className="text-xs text-gray-600">₦{item.BasePrice}</p>
                    </div>

                    <div className="absolute right-3">
                      <FaTrashAlt
                        className="h-[1rem] w-[1rem] cursor-pointer text-[#AD343E]"
                        onClick={() => removeCart(item)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Your cart is empty</p>
            )}
          </div>

          {cartItems.length > 0 && (
            <>
              <div className="flex justify-between">
                <p className="font-bold">Total</p>
                <p className="font-bold text-[#AD343E]">₦{total}</p>
              </div>

              <div className="mt-4">
                <Link to="/reservation">
                  <button
                    className="w-full rounded bg-[#AD343E] py-2 text-white transition-colors hover:bg-[#8b2a34]"
                    
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;



