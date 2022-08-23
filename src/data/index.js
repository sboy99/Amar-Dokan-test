import {
  HomeIcon,
  InformationCircleIcon,
  TemplateIcon,
} from "@heroicons/react/outline";

export const NavbarItems = [
  {
    id: 1,
    icon: HomeIcon,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    icon: TemplateIcon,
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
