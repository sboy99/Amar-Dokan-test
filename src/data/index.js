import {
  HomeIcon,
  InformationCircleIcon,
  ComputerDesktopIcon,
  ArrowLeftOnRectangleIcon as LogoutIcon,
} from "@heroicons/react/24/outline";
import GLogo from "../assets/G_Logo.svg";
import notFound from "../assets/img/not_found.png";

export { GLogo, notFound };

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
