import Facebook from "./Facebook";
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
      <Facebook />
    </>
  );
};

export default Layout;
