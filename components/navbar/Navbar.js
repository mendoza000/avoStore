import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import avoIcon from "@public/images/avoIcon.png";
import storeIcon from "@public/images/storeIcon.png";
import { useSelector } from "react-redux";
import { getProducts } from "helpers/getProducts";

const Navbar = () => {
  getProducts();
  const router = useRouter();
  let countAvos = 0;
  const cart = useSelector((state) => state.cart.items);
  cart.forEach((item) => {
    countAvos += item.count;
  });

  return (
    <nav>
      <menu className="ui__navmenu">
        <Link href={"/"}>
          <a className={router.pathname === "/" ? "ui__navmenu-active" : ""}>
            <Image src={avoIcon} width={"35rem"} height={"35rem"} />
            <span>AvoStore</span>
          </a>
        </Link>
        <Link href={"/cart"}>
          <a
            className={router.pathname === "/cart" ? "ui__navmenu-active" : ""}
          >
            <Image src={storeIcon} width={"35rem"} height={"35rem"} />
            <span>Basket ({countAvos})</span>
          </a>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
