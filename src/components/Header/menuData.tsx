import { Menu } from "@/types/menu";
import menuVisibilityConfig from "@/config/menuVisibility";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    visible: menuVisibilityConfig.home,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
    visible: menuVisibilityConfig.about,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
    visible: menuVisibilityConfig.contact,
  },
  {
    id: 5,
    title: "Our Products",
    path: "/products",
    newTab: false,
    visible: menuVisibilityConfig.ourProducts,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
    visible: menuVisibilityConfig.blog,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    visible: menuVisibilityConfig.pages,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
        visible: menuVisibilityConfig.submenu.aboutPage,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
        visible: menuVisibilityConfig.submenu.blogGridPage,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
        visible: menuVisibilityConfig.submenu.blogSidebarPage,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
        visible: menuVisibilityConfig.submenu.blogDetailsPage,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
        visible: menuVisibilityConfig.submenu.signInPage,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
        visible: menuVisibilityConfig.submenu.signUpPage,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
        visible: menuVisibilityConfig.submenu.errorPage,
      },
    ],
  },
];
export default menuData;
