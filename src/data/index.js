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
