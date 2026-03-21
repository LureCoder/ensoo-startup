// Menu visibility configuration

interface MenuVisibilityConfig {
  home: boolean;
  about: boolean;
  contact: boolean;
  ourProducts: boolean;
  blog: boolean;
  pages: boolean;
  submenu: {
    aboutPage: boolean;
    blogGridPage: boolean;
    blogSidebarPage: boolean;
    blogDetailsPage: boolean;
    signInPage: boolean;
    signUpPage: boolean;
    errorPage: boolean;
  };
}

const menuVisibilityConfig: MenuVisibilityConfig = {
  home: true,
  about: true,
  contact: true,
  ourProducts: true,
  blog: false,
  pages: false,
  submenu: {
    aboutPage: true,
    blogGridPage: true,
    blogSidebarPage: true,
    blogDetailsPage: true,
    signInPage: true,
    signUpPage: true,
    errorPage: true
  }
};

export default menuVisibilityConfig;
