export const CustomerRev = [
  {
    id: 1,
    Title: 'The best restaurant',
    Review:
      'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
    Profile: '../../Assests/Profile1.jpg',
    Name: 'Aliyu Miracle',
  },

  {
    id: 2,
    Title: 'Simply delicious',
    Review:
      'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
    Profile: '../../Assests/Profile2.jpg',
    Name: 'Zainab Kamaldeen',
  },

  {
    id: 3,
    Title: 'One of a kind restaurant',
    Review:
      'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
    Profile: '../../Assests/Profile1.jpeg',
    Name: 'Femi Kay',
  },
];

export const MenuData = [
  {
    id: 1,
    Category: 'Main Dishes',
    Dishes: [
      {
        Name: 'Jollof Rice',
        BasePrice: 3000,
        Picture: '/Assests/FoodImages/JollofRice.jpg',
      },
      {
        Name: 'Fried Rice',
        BasePrice: 3500,
        Picture: '/Assests/FoodImages/FriedRice.jpg',
      },
      {
        Name: 'Ofada Rice',
        BasePrice: 3000,
        Picture: '/Assests/FoodImages/Ofada Rice.jpg',
      },
      {
        Name: 'Beans and Plantain',
        BasePrice: 3500,
        Picture: '/Assests/FoodImages/BeansAndPlaintain.jpeg',
      },
      {
        Name: 'Yam Porridge',
        BasePrice: 2000,
        Picture: '/Assests/FoodImages/YamPorradge.jpeg',
      },
    ],
  },
  {
    id: 2,
    Category: 'Snacks',
    Dishes: [
      {
        Name: 'Puff-Puff',
        BasePrice: 500,
        Picture: '/Assests/FoodImages/PuffPuff.jpg',
      },
      {
        Name: 'Boli (Roasted Plantain)',
        BasePrice: 1500,
        Picture: '/Assests/FoodImages/RoastedPlaintain.jpg',
      },
      {
        Name: 'Meat Pie',
        BasePrice: 2000,
        Picture: '/Assests/FoodImages/Meatpie.jpg',
      },
      {
        Name: 'Scotch Egg',
        BasePrice: 2000,
        Picture: '/Assests/FoodImages/Scotch Egg.jpg',
      },
      {
        Name: 'Sausage',
        BasePrice: 800,
        Picture: '/Assests/FoodImages/Sausage.jpeg',
      },
    ],
  },
  {
    id: 3,
    Category: 'Seafood',
    Dishes: [
      {
        Name: 'Pepper Soup',
        BasePrice: 3000,
        Picture: '/Assests/FoodImages/PepperSoup.jpg',
      },
      {
        Name: 'Crab Pepper Soup',
        BasePrice: 2700,
        Picture: '/Assests/FoodImages/CrabPepper.jpg',
      },
      {
        Name: 'Stockfish Stew',
        BasePrice: 2000,
        Picture: '/Assests/FoodImages/StockFishStew.jpeg',
      },
      {
        Name: 'Prawns Stir Fry',
        BasePrice: 3000,
        Picture: '', // Add a picture URL
      },
    ],
  },
  {
    id: 4,
    Category: 'Beverages',
    Dishes: [
      {
        Name: 'Zobo',
        BasePrice: 500,
        Picture: '/Assests/FoodImages/Zobo.jpg',
      },
      {
        Name: 'Tiger Nut',
        BasePrice: 500,
        Picture: '/Assests/FoodImages/Tigernut.jpeg',
      },
      {
        Name: 'Palm Wine',
        BasePrice: 1000,
        Picture: '/Assests/FoodImages/Palm Wine.jpg',
      },
      {
        Name: 'Kunu',
        BasePrice: 500,
        Picture: '/Assests/FoodImages/Kunus.jpeg',
      },
    ],
  },
  {
    id: 5,
    Category: 'Soups',
    Dishes: [
      {
        Name: 'Egusi Soup',
        BasePrice: 2500,
        Picture: '/Assests/FoodImages/Egusi Soup.jpg',
      },
      {
        Name: 'Ogbono Soup',
        BasePrice: 2500,
        Picture: '/Assests/FoodImages/Ogbono Soup.jpg',
      },
      {
        Name: 'Ewedu Soup',
        BasePrice: 2000,
        Picture: '/Assests/FoodImages/Ewedu Soup.jpeg',
      },
      {
        Name: 'Oha Soup',
        BasePrice: 2000,
        Picture: '/Assests/FoodImages/Oha Soup.jpg',
      },
      {
        Name: 'Banga Soup',
        BasePrice: 2000,
        Picture: '/Assests/FoodImages/Banga.jpg',
      },
      {
        Name: 'Nsala Soup',
        BasePrice: 2000,
        Picture: '/Assests/FoodImages/Nsala.jpg',
      },
    ],
  },
  {
    id: 6,
    Category: 'Swallows',
    Dishes: [
      {
        Name: 'Semovita',
        BasePrice: 800,
        Picture: '/Assests/FoodImages/Semovita.jpg',
      },
      {
        Name: 'Eba',
        BasePrice: 500,
        Picture: '/Assests/FoodImages/Eba.jpg',
      },
      {
        Name: 'Pounded Yam',
        BasePrice: 800,
        Picture: '/Assests/FoodImages/Pounded Yam.jpg',
      },

      {
        Name: 'Fufu',
        BasePrice: 800,
        Picture: '/Assests/FoodImages/Fufu.jpg',
      },

      {
        Name: 'Tuwo Shinkafa',
        BasePrice: 800,
        Picture: '/Assests/FoodImages/TuwoShinkafa.jpg',
      },
    ],
  },

  {
    id: 7,
    Category: 'Addons',
    Dishes: [
      {
        Name: 'Chicken',
        BasePrice: 1000,
        Picture: '', // Optional: Add images of addons if needed
      },
      {
        Name: 'Fish',
        BasePrice: 1200,
        Picture: '',
      },
      {
        Name: 'Beef',
        BasePrice: 800,
        Picture: '',
      },
      {
        Name: 'Shrimp',
        BasePrice: 500,
        Picture: '',
      },
    ],
  },
];

// const [cartItems, setCartItems] = useState<Dish[]>([]);
// const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

// const handleAddToCart = async (dish: Dish, selectedAddons: string[]) => {
//   const updatedDish = {
//     ...dish,
//     Addons: dish.Addons.filter((addon) =>
//       selectedAddons.includes(addon.Name)
//     ),
//   };

//   const existingDish = cartItems.find((item) => item.Name === dish.Name);
//   if (existingDish) {
//     await updateCartItem(userId, dish.Name, updatedDish); // Update existing dish
//   } else {
//     await addToCart(userId, dish.Name, updatedDish); // Add new dish
//   }
// };

// const handleAddonChange = (addonName: string) => {
//   setSelectedAddons((prev) =>
//     prev.includes(addonName)
//       ? prev.filter((name) => name !== addonName)
//       : [...prev, addonName]
//   );
// };

// useEffect(() => {
//   const getItems = async () => {
//     try {
//       const items = await getCartItems(userId);
//       setCartItems(items);
//     } catch (error) {
//       return error;
//     }
//   };

//   getItems();
// }, [userId]);
