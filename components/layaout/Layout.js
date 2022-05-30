import Footer from "@components/Footer";
import { getProducts } from "helpers/getProducts";
import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  getProducts();
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
