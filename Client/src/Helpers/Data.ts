// import Profile1 from '../assets/Profile1.jpg';
// import Profile2 from '../assets/Profile2.jpg';
// import Profile3 from '../assets/Profile3.jpeg';

// Main Dishes
import JollOfRice from '../assets/FoodImages/JollofRice.jpg'
import FriedRice from '../assets/FoodImages/FriedRice.jpg';
import Rice from '../assets/FoodImages/Rice.png'
import OfadaRice from '../assets/FoodImages/Ofada Rice.jpg';
import BeansandPlaintain from '../assets/FoodImages/BeansAndPlaintain.jpeg'
import YamPorradge from '../assets/FoodImages/YamPorradge.jpeg'

// Snacks
import PuffPuff from '../assets/FoodImages/PuffPuff.jpg'
import EggRoll from '../assets/FoodImages/EggRoll.jpg'
import FishRoll from '../assets/FoodImages/FishRoll.jpg'
import MeatPie from '../assets/FoodImages/Meatpie.jpg'
import ScotchEgg from '../assets/FoodImages/Scotch Egg.jpg'
import Sausage from '../assets/FoodImages/Sausage.jpeg'

// Seafood
import PepperSoup from '../assets/FoodImages/PepperSoup.jpg'
import CrabPepperSoup from  '../assets/FoodImages/CrabPepper.jpg'
import StockFishSoup from '../assets/FoodImages/StockFishStew.jpeg'
import Asun from '../assets/FoodImages/Asun-meat.png'

// Drinks
import Zobo from '../assets/FoodImages/Zobo.jpg'
import TigerNut from '../assets/FoodImages/Tigernut.jpeg'
import PalmWine from '../assets/FoodImages/Palm Wine.jpg';
import Kunu from '../assets/FoodImages/Kunus.jpeg';

// Soup
import Egusi from '../assets/FoodImages/Egusi Soup.jpg';
import Ogbono from '../assets/FoodImages/Ogbono Soup.jpg';
import Ewedu from '../assets/FoodImages/Ewedu Soup.jpeg';
import Oha from '../assets/FoodImages/Oha Soup.jpg';
import Banga from '../assets/FoodImages/Banga.jpg';
import Nsala from '../assets/FoodImages/Nsala.jpg';

// Swallows
import Semovita from '../assets/FoodImages/Semovita.jpg';
import Eba from '../assets/FoodImages/Eba.jpg';
import PoundedYam from '../assets/FoodImages/Pounded Yam.jpg';
import TuwoShinkafa from '../assets/FoodImages/TuwoShinkafa.jpg';
import Fufu from '../assets/FoodImages/Fufu.jpg';
import Amala from '../assets/FoodImages/Amala.jpg';

// Addons
import FriedChicken from '../assets/FoodImages/Fried-Chicken.jpg';
import Fish from '../assets/FoodImages/Fried-Fish.jpg';
import Beef from '../assets/FoodImages/Beef.jpg';
import Shrimp from '../assets/FoodImages/Shrimps.jpg';

// export const CustomerRev = [
//   {
//     id: 1,
//     Title: 'The best restaurant',
//     Review:
//       'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
//     Profile: Profile1,
//     Name: 'Aliyu Miracle',
//   },

//   {
//     id: 2,
//     Title: 'Simply delicious',
//     Review:
//       'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
//     Profile: Profile2,
//     Name: 'Zainab Kamaldeen',
//   },

//   {
//     id: 3,
//     Title: 'One of a kind restaurant',
//     Review:
//       'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
//     Profile: Profile3,
//     Name: 'Femi Kay',
//   },
// ];

export const MenuData = [
  {
    id: 1,
    Category: 'Main Dishes',
    Dishes: [
      {
        Name: 'Jollof Rice',
        BasePrice: 1500,
        Picture: JollOfRice,
      },
      {
        Name: 'Fried Rice',
        BasePrice: 2000,
        Picture: FriedRice,
      },
      {
        Name: 'Rice',
        BasePrice: 1000,
        Picture: Rice,
      },
      {
        Name: 'Ofada Rice',
        BasePrice: 1000,
        Picture: OfadaRice,
      },
      {
        Name: 'Beans and Plantain',
        BasePrice: 3500,
        Picture: BeansandPlaintain,
      },
      {
        Name: 'Yam Porridge',
        BasePrice: 2000,
        Picture: YamPorradge,
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
        Picture: PuffPuff,
      },
      {
        Name: 'EggRoll',
        BasePrice: 1500,
        Picture: EggRoll,
      },
      {
        Name: 'FishRoll',
        BasePrice: 1500,
        Picture: FishRoll,
      },
      {
        Name: 'Meat Pie',
        BasePrice: 2000,
        Picture: MeatPie,
      },
      {
        Name: 'Scotch Egg',
        BasePrice: 2000,
        Picture: ScotchEgg,
      },
      {
        Name: 'Sausage',
        BasePrice: 800,
        Picture: Sausage,
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
        Picture: PepperSoup,
      },
      {
        Name: 'Crab Pepper Soup',
        BasePrice: 2700,
        Picture: CrabPepperSoup,
      },
      {
        Name: 'Stockfish Stew',
        BasePrice: 2000,
        Picture: StockFishSoup,
      },
      {
        Name: 'Asun-Meat',
        BasePrice: 3000,
        Picture: Asun,
      },
    ],
  },
  {
    id: 4,
    Category: 'Drinks',
    Dishes: [
      {
        Name: 'Zobo',
        BasePrice: 500,
        Picture: Zobo,
      },
      {
        Name: 'Tiger Nut',
        BasePrice: 500,
        Picture: TigerNut,
      },
      {
        Name: 'Palm Wine',
        BasePrice: 1000,
        Picture: PalmWine,
      },
      {
        Name: 'Kunu',
        BasePrice: 500,
        Picture: Kunu,
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
        Picture: Egusi,
      },
      {
        Name: 'Ogbono Soup',
        BasePrice: 2500,
        Picture: Ogbono,
      },
      {
        Name: 'Ewedu Soup',
        BasePrice: 2000,
        Picture: Ewedu,
      },
      {
        Name: 'Oha Soup',
        BasePrice: 2000,
        Picture: Oha,
      },
      {
        Name: 'Banga Soup',
        BasePrice: 2000,
        Picture: Banga,
      },
      {
        Name: 'Nsala Soup',
        BasePrice: 2000,
        Picture: Nsala,
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
        Picture: Semovita,
      },
      {
        Name: 'Eba',
        BasePrice: 200,
        Picture: Eba,
      },
      {
        Name: 'Pounded Yam',
        BasePrice: 500,
        Picture: PoundedYam,
      },

      {
        Name: 'Fufu',
        BasePrice: 300,
        Picture: Fufu,
      },

      {
        Name: 'Tuwo Shinkafa',
        BasePrice: 200,
        Picture: TuwoShinkafa,
      },
      {
        Name: 'Amala',
        BasePrice: 200,
        Picture: Amala,
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
        Picture: FriedChicken,
      },
      {
        Name: 'Fish',
        BasePrice: 1200,
        Picture: Fish,
      },
      {
        Name: 'Beef',
        BasePrice: 800,
        Picture: Beef,
      },
      {
        Name: 'Shrimp',
        BasePrice: 800,
        Picture: Shrimp,
      },
    ],
  },
];
