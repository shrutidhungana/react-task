import Navbar from "../../components/Navbar";
import logo from "../../assets/favicon.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const additionalLinks = [
     {id: "products", label: "Products", url: "/products"},
    { id: "cart", label: <FaShoppingCart />, url: "/carts" },
  ];
  return (
    <Navbar logo={logo} title="TrendHive" additionalLinks={additionalLinks} />
  );
};

export default Header;
