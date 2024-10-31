import React from 'react'
import Navbar from '../../components/Navbar'
import logo from '../../assets/favicon.png'
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
    const additionalLinks = [
      { id: "product", label: "Product", url: "/product" },
      { id: "cart", label: <FaShoppingCart/>, url: "/cart" },
    ];
  return (
    <Navbar logo={logo} title="TrendHive" additionalLinks={additionalLinks} />
  );
}

export default Header
