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
