import {
  HomeIcon,
  InformationCircleIcon,
  ComputerDesktopIcon,
  ArrowLeftOnRectangleIcon as LogoutIcon,
  RectangleGroupIcon,
  SparklesIcon,
  HeartIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

import {
  TruckIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import GLogo from "../assets/G_Logo.svg";
import notFound from "../assets/img/not_found.png";
import blueBG from "../assets/img/blue_bg.jpg";
import homeBg from "../assets/img/beams-home.jpg";
import laserBeam from "../assets/img/laser_beam.png";
import beams from "../assets/img/beams.jpg";
import heavyRain from "../assets/pattern/heavy-rain.svg";
import rails from "../assets/pattern/rails.svg";
import cage from "../assets/pattern/cage.svg";
export {
  GLogo,
  notFound,
  blueBG,
  homeBg,
  laserBeam,
  beams,
  heavyRain,
  rails,
  cage,
};

export const PW_REGX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

//> URLs
export const products_url = "/react-store-products";
export const single_product_url = "/react-store-single-product?id=";

//> Navbar
export const NavbarItems = [
  {
    id: 1,
    icon: HomeIcon,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    icon: ComputerDesktopIcon,
    name: "Products",
    to: "/products",
  },
  {
    id: 3,
    icon: InformationCircleIcon,
    name: "About",
    to: "/about",
  },
];

//> Footer Links
export const footerLinks = [
  {
    id: 1,
    title: `Navigation`,
    links: [
      {
        id: 11,
        name: `Home`,
        to: `/`,
      },
      {
        id: 12,
        name: `About`,
        to: `/about`,
      },
      {
        id: 13,
        name: `Products`,
        to: `/products`,
      },
      {
        id: 14,
        name: `Cart`,
        to: `/cart`,
      },
    ],
  },
];

//> Search Items..
export const searchItems = [
  {
    id: 1,
    title: `Option1`,
  },
  {
    id: 2,
    title: `Option2`,
  },
  {
    id: 3,
    title: `Option3`,
  },
  {
    id: 4,
    title: `Option4`,
  },
  {
    id: 5,
    title: `Option5`,
  },
];

export const profileLinks = [
  {
    id: 1,
    Icon: LogoutIcon,
    text: `Logout`,
  },
];

//default user
export const defaultUser =
  "https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_960_720.png";

//> Home
export const BenefitTabs = [
  {
    id: `tab1`,
    tab: { name: `Plenty Options` },
    content: {
      Icon: RectangleGroupIcon,
      textColor: `text-indigo-600`,
      iconBg: `bg-indigo-600`,
      heading: "Choose what ever you want",
      desc: `  Cumque ut rerum ratione molestias quae excepturi magnam saepe, iure eos, blanditiis tempore. Ipsa, voluptatibus at quas nulla delectus ex. Temporibus animi quidem quam et voluptate totam voluptatibus facere impedit doloribus!`,
    },
  },
  {
    id: `tab2`,
    tab: { name: `Fast Delivary` },
    content: {
      Icon: BoltIcon,
      textColor: `text-teal-600`,
      iconBg: `bg-teal-600`,
      heading: "fast & on time delivery experienced never before",
      desc: `  Cumque ut rerum ratione molestias quae excepturi magnam saepe, iure eos, blanditiis tempore. Ipsa, voluptatibus at quas nulla delectus ex. Temporibus animi quidem quam et voluptate totam voluptatibus facere impedit doloribus!`,
    },
  },
  {
    id: `tab3`,
    tab: { name: `Fresh & Authentic` },
    content: {
      Icon: SparklesIcon,
      textColor: `text-amber-500`,
      iconBg: `bg-amber-500`,
      heading: "100% new comers & fresh products",
      desc: `  Cumque ut rerum ratione molestias quae excepturi magnam saepe, iure eos, blanditiis tempore. Ipsa, voluptatibus at quas nulla delectus ex. Temporibus animi quidem quam et voluptate totam voluptatibus facere impedit doloribus!`,
    },
  },
  {
    id: `tab4`,
    tab: { name: `Affrodable` },
    content: {
      Icon: HeartIcon,
      textColor: `text-rose-600`,
      iconBg: `bg-rose-600`,
      heading: "Quality products that suits everyone",
      desc: `  Cumque ut rerum ratione molestias quae excepturi magnam saepe, iure eos, blanditiis tempore. Ipsa, voluptatibus at quas nulla delectus ex. Temporibus animi quidem quam et voluptate totam voluptatibus facere impedit doloribus!`,
    },
  },
];

export const HomeProducts = [
  {
    id: 1,
    title: `Albany Chair`,
    category: `Furniture`,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    price: 69,
  },
  {
    id: 2,
    title: `Mobiles`,
    category: `Electronics`,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=629&q=80",
    price: 299,
  },
  {
    id: 3,
    title: `Monitor`,
    category: `Electronics`,
    image:
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price: 349,
  },
  {
    id: 4,
    title: `Sport Shoes`,
    category: `Sports`,
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 99,
  },
  {
    id: 5,
    title: `Gaming Keyboards`,
    category: `gaming`,
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1265&q=80",
    price: 29,
  },
  {
    id: 6,
    title: `Jeans`,
    category: `fashion`,
    image:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 49,
  },
  {
    id: 7,
    title: `Headphones`,
    category: `accessories`,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    price: 99,
  },
];

export const Incentives = [
  {
    id: 1,
    Icon: TruckIcon,
    title: `Fast Delivary`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nostrum quasi ut, consequuntur animi quia?`,
  },
  {
    id: 2,
    Icon: CheckBadgeIcon,
    title: `Quality tested`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nostrum quasi ut, consequuntur animi quia?`,
  },
  {
    id: 3,
    Icon: ShieldCheckIcon,
    title: `Sequre Payment`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nostrum quasi ut, consequuntur animi quia?`,
  },
];

export const HomeTestimonials = [
  {
    userName: `Sagar Bera`,
    domain: `@sagar`,
    rating: 4.7,
    profile: `https://avatars.githubusercontent.com/u/86586277?s=400&u=61afff291bf863a4231020c311230340615a8b59&v=4`,
    title: `Good quality product`,
    desc: `Amet consectetur adipisicing elit. Architecto error, reprehenderit ex magni omnis aspernatur!`,
  },
  {
    userName: `Monisha Bera`,
    domain: `@moni`,
    rating: 4.8,
    profile: `https://avatars.githubusercontent.com/u/112371330?v=4`,
    title: `Super quality product`,
    desc: `Amet consectetur adipisicing elit. Architecto error, reprehenderit ex magni omnis aspernatur!`,
  },
  {
    userName: `Sudipta Tung`,
    domain: `@sudipta`,
    rating: 5.0,
    profile: `https://avatars.githubusercontent.com/u/86586277?s=400&u=61afff291bf863a4231020c311230340615a8b59&v=4`,
    title: `Fully Satified`,
    desc: `Amet consectetur adipisicing elit. Architecto error, reprehenderit ex magni omnis aspernatur!`,
  },
];

//> Product

export const Categories = [
  {
    id: 1,
    name: `Fashion`,
  },
  {
    id: 2,
    name: `Sports`,
  },
  {
    id: 3,
    name: `Electronics`,
  },
  {
    id: 4,
    name: `Home & Appliance`,
  },
  {
    id: 5,
    name: `Smart Phones`,
  },
  {
    id: 6,
    name: `Decorations`,
  },
];

export const SortOrders = [
  {
    id: 1,
    name: `Name`,
  },
  {
    id: 2,
    name: `Newest`,
  },
  {
    id: 3,
    name: `Oldest`,
  },
  {
    id: 4,
    name: `Lowest Price`,
  },
  {
    id: 5,
    name: `Highest Price`,
  },
];
