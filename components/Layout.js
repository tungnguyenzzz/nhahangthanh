import Footer from "./Footer";
import Navbar from "./Navbar";
import Phone from "./Phone";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Phone />
      <Footer />
    </>
  );
};

export default Layout;
