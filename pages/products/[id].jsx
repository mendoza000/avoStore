import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {BsFillCartPlusFill} from 'react-icons/bs'

const ProductItem = () => {
  const [countAvos, setCountAvos] = useState(1);
  const products = useSelector((state) => state.products.products);
  const {
    query: { id },
  } = useRouter();
  const avo = products.find((product) => product.id === id);

  const handleAddAvo = (e) => {
    const target = e.target 
    setCountAvos(parseInt(target.value))
  }
  
  return (
    <div className="product__container">
      <div className="product__header">
        <Image 
          className="product__image"
          src={require(`../../public${avo.image}`)}
          width={"270rem"}
          height={"270rem"}
        />
        <div className="product__header-section">
          <h2 className="product__title">{avo.name}</h2>
          <p className="product__sub">
            <span className="product__price">{avo.price}$</span>
            <span className="product__code">{avo.sku}</span>
          </p>

          <form className="product__add">
            <input type="number" value={countAvos} onChange={handleAddAvo}/>
            <button>
              <BsFillCartPlusFill/>
              Add to cart
            </button>
          </form>
        </div>
      </div>

      <div className="product__description">
        <h3 className="product__description-title">About this avocado</h3>
        <p className="product__description-text">{avo.attributes.description}</p>
      </div>

      <table className="product__table">
        <thead className="product__table-header">
          <tr>
            <th COLSPAN={2}>Attributes</th>
          </tr>
        </thead>
        <tr className="product__table-item">
          <th>Shape</th>
          <th>{avo.attributes.shape}</th>
        </tr>
        <tr className="product__table-item">
          <th>Hardiness</th>
          <th>{avo.attributes.hardiness}</th>
        </tr>
        <tr className="product__table-item">
          <th>Taste</th>
          <th>{avo.attributes.taste}</th>
        </tr>
      </table>
    </div>
  );
};

export default ProductItem;
