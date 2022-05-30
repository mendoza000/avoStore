import React, { useEffect } from "react";
import Image from "next/image";
import avoIcon from "@public/images/avoIcon.png";
import Card from "@components/Card";
import { useSelector } from "react-redux";
import { getProducts } from "helpers/getProducts";
import Link from "next/link";

const Home = () => {
  const products = useSelector((state) => state.products?.products);
  getProducts();

  const handleClickAvo = (e) => {
    const target = e.target;
  };
  return (
    <div className="home__container animate__animated animate__fadeIn animate__faster">
      <h1 className="home__title">
        Avo
        <Image
          className="home__title-img"
          onClick={handleClickAvo}
          src={avoIcon}
          width={"40rem"}
          height={"40rem"}
        />
        <span>Store</span>
      </h1>

      <Link href={"/yesornot"}>
        <a className="home__subtitle">¿Deberia comer Aguacate hoy?</a>
      </Link>

      <div className="home__avoList">
        {products.map((avo) => {
          return <Card key={avo.id} {...avo} />;
        })}
      </div>
    </div>
  );
};

export default Home;
