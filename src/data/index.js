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
import GLogo from "../assets/G_Logo.svg";
import notFound from "../assets/img/not_found.png";
import blueBG from "../assets/img/blue_bg.jpg";
import homeBg from "../assets/img/beams-home.jpg";
import laserBeam from "../assets/img/laser_beam.png";
import beams from "../assets/img/beams.jpg";
export { GLogo, notFound, blueBG, homeBg, laserBeam, beams };

export const PW_REGX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

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

export const furniture =
  "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80";

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
