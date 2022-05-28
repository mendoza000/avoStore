import React, { useEffect, useState } from "react";
import Image from "next/image";
import avoIcon from "@public/images/avoIcon.png";
import Card from "@components/Card";

const Home = () => {
  const [productsList, setProductsList] = useState([]);

  const handleClickAvo = (e) => {
    const target = e.target;
  };

  useEffect(() => {
    fetch("/api/avo")
      .then((resp) => resp.json())
      .then(({ avos }) => {
        setProductsList(avos);
      });
  }, []);

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

      <div className="home__avoList">
        {productsList.map((avo) => {
          return <Card key={avo.id} {...avo} />;
        })}
      </div>
    </div>
  );
};

export default Home;
