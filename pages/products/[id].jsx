import { useRouter } from "next/router";
import React from "react";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
};

export default ProductItem;
