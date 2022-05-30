import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Card = ({ name, price, image, id, attributes, sku }) => {
  const router = useRouter();

  const handleOpenProduct = () => {
    router.push("/products/" + id);
  };

  return (
    <div className="ui__card" onClick={handleOpenProduct}>
      <Image
        src={require("../public" + image)}
        width={"250rem"}
        height={"250rem"}
      />
      <p className="ui__card-title">{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Card;
