import React from "react";
import Image from "next/image";
import avoIcon from "@public/images/avoIcon.png";
import Card from "@components/Card";
import Link from "next/link";
import { getProducts } from "helpers/getProducts";

const Home = ({ products }) => {
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
        {products.avos.map((avo) => {
          return <Card key={avo.id} {...avo} />;
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const resp = await fetch("https://avostore000.vercel.app/api/avo");
  const products = await resp.json();
  return {
    props: {
      products,
    },
  };
};

export default Home;
