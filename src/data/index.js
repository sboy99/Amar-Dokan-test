import {
  HomeIcon,
  InformationCircleIcon,
  ComputerDesktopIcon,
  ArrowLeftOnRectangleIcon as LogoutIcon,
  RectangleGroupIcon,
  SparklesIcon,
  HeartIcon,
  BoltIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

import {
  TruckIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import {
  CubeIcon,
  UsersIcon,
  ChartBarIcon,
  ListBulletIcon,
  UserIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

import {
  CubeIcon as CubeIconActive,
  UsersIcon as UsersIconActive,
  ChartBarIcon as ChartBarIconActive,
  ListBulletIcon as ListBulletIconActive,
  UserIcon as UserIconActive,
  RectangleStackIcon as RectangleStackIconActive,
} from "@heroicons/react/24/solid";

import GLogo from "../assets/G_Logo.svg";
import notFound from "../assets/img/not_found.png";
import blueBG from "../assets/img/blue_bg.jpg";
import homeBg from "../assets/img/beams-home.jpg";
import laserBeam from "../assets/img/laser_beam.png";
import beams from "../assets/img/beams.jpg";
import heavyRain from "../assets/pattern/heavy-rain.svg";
import diagonalLines from "../assets/pattern/diagonal-lines.svg";
import rails from "../assets/pattern/rails.svg";
import cage from "../assets/pattern/cage.svg";
import stars from "../assets/pattern/stars.svg";
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
  diagonalLines,
  stars,
};

// > Regular Expressions
export const PW_REGX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
export const MONGODB_OBJECT_ID_RGEX = /^[0-9a-fA-F]{24}$/;

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
    name: `Name (a-z)`,
    type: "SORT_BY_NAME",
  },
  {
    id: 2,
    name: `Name (z-a)`,
    type: "SORT_BY_NAME_REVERSE",
  },
  {
    id: 3,
    name: `Newest`,
    type: "SORT_BY_NEWEST",
  },
  {
    id: 4,
    name: `Oldest`,
    type: "SORT_BY_OLDEST",
  },
  {
    id: 5,
    name: `Lowest Price`,
    type: "SORT_BY_LOWEST_PRICE",
  },
  {
    id: 6,
    name: `Highest Price`,
    type: "SORT_BY_HIGHEST_PRICE",
  },
];

export const HeaderTexts = {
  featuredProducts: {
    subject: "Trending Products",
    title: "Only For You",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint tempore dolores.",
  },
  recommandedProducts: {
    subject: "Recommeded",
    title: "You'd like this also",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint tempore dolores.",
  },
  cart: {
    subject: "Checkout",
    title: "Shopping Cart",
  },
};

//> Modal Opener

export const ModalContexts = {
  VerifyEmail: {
    Icon: FingerPrintIcon,
    title: "Please verify your email",
    desc: "A verification mail has been sent to your mail address. Please open your email and check inbox and spam folder for the email. For some technical issues mail might goes into spam folder, So, please consider checking your mail address. Thank You.",
    layoutColor: "success",
    buttonText: "Got it,Thanks",
  },
  NotLoggedIn: {
    Icon: FingerPrintIcon,
    title: "You're not logged in",
    desc: "Its look like you are not logged in. So, please log in first to continue further",
    layoutColor: "danger",
    buttonText: "Thanks",
  },
  NotAdmin: {
    Icon: FingerPrintIcon,
    title: "Admin Only",
    desc: "Its look like you are requesting admin only route. Your resquest can't be permitted",
    layoutColor: "danger",
    buttonText: "I understand!",
  },
};

//> Admin

export const AdminLinks = [
  {
    id: 1,
    title: `Overview`,
    icon: ChartBarIcon,
    activeIcon: ChartBarIconActive,
    to: `/admin`,
  },
  {
    id: 2,
    title: `Products`,
    icon: CubeIcon,
    activeIcon: CubeIconActive,
    to: `/admin/products`,
  },
  {
    id: 3,
    title: `Category`,
    icon: ListBulletIcon,
    activeIcon: ListBulletIconActive,
    to: `/admin/product-categories`,
  },
  {
    id: 4,
    title: `Customers`,
    icon: UsersIcon,
    activeIcon: UsersIconActive,
    to: `/admin/customers`,
  },
  {
    id: 5,
    title: `Orders`,
    icon: RectangleStackIcon,
    activeIcon: RectangleStackIconActive,
    to: `/admin/orders`,
  },
  {
    id: 6,
    title: `Staffs`,
    icon: UserIcon,
    activeIcon: UserIconActive,
    to: `/admin/employees`,
  },
];

export const AdminSubLinks = [
  {
    id: 4,
    mainTitle: `User Management`,
    subLinks: [
      {
        id: 1,
        title: `Active Users`,
        to: ``,
      },
      {
        id: 2,
        title: `Block Users`,
        to: ``,
      },
    ],
  },
  {
    id: 1,
    mainTitle: `Category Management`,
    subLinks: [
      {
        id: 1,
        title: `Available Categories`,
        to: ``,
      },
      {
        id: 2,
        title: `Create Category`,
        to: ``,
      },
      {
        id: 3,
        title: `Modify Categories`,
        to: ``,
      },
      {
        id: 4,
        title: `Delete Categories`,
        to: ``,
      },
    ],
  },
  {
    id: 2,
    mainTitle: `Product Management`,
    subLinks: [
      {
        id: 1,
        title: `Available Products`,
        to: ``,
      },
      {
        id: 2,
        title: `Create Product`,
        to: ``,
      },
      {
        id: 3,
        title: `Modify Products`,
        to: ``,
      },
      {
        id: 4,
        title: `Delete Products`,
        to: ``,
      },
    ],
  },
  {
    id: 3,
    mainTitle: `Orders Report`,
    subLinks: [
      {
        id: 1,
        title: `All Orders`,
        to: ``,
      },
      {
        id: 2,
        title: `Modify Orders`,
        to: ``,
      },
      {
        id: 3,
        title: `Delete Orders`,
        to: ``,
      },
    ],
  },
];
