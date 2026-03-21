import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    visible: true,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
    visible: true,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
    visible: true,
  },
  {
    id: 5,
    title: "Our Products",
    path: "/products",
    newTab: false,
    visible: true,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
    visible: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    visible: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
        visible: true,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
        visible: true,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
        visible: true,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
        visible: true,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
        visible: true,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
        visible: true,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
        visible: true,
      },
    ],
  },
];
export default menuData;
