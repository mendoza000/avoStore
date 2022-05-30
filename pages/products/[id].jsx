import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BsFillCartPlusFill} from 'react-icons/bs'
import { getProducts } from "helpers/getProducts";
import { cartAddItem } from "store/actions/cart.actions";

const ProductItem = () => {
  const dispatch = useDispatch()
  const [countAvos, setCountAvos] = useState(1);
  getProducts()
  const products = useSelector((state) => state.products?.products);
  const [avo, setAvo] = useState({});
  useEffect(() => {
    setAvo(products.find((product) => product.id === id))
  }, [products])

  const {
    query: { id },
  } = useRouter();

  const handleAddAvo = (e) => {
    const target = e.target 
    setCountAvos(parseInt(target.value))
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(cartAddItem({
      avo,
      count: countAvos
    }))
  }
  
  return (
    <div className="product__container animate__animated animate__fadeIn animate__faster">
      <div className="product__header">
        <Image 
          className="product__image"
          src={
            (avo?.image !== undefined)
            ? require(`../../public${avo.image}`)
            : require("../../public/images/bacon.jpg")
          }
          width={"270rem"}
          height={"270rem"}
        />
        <div className="product__header-section">
          <h2 className="product__title">{avo?.name}</h2>
          <p className="product__sub">
            <span className="product__price">{avo?.price}$</span>
            <span className="product__code">{avo?.sku}</span>
          </p>

          <form className="product__add" onSubmit={handleAddToCart}>
            <input type="number" value={countAvos} onChange={handleAddAvo}/>
            <button type="submit">
              <BsFillCartPlusFill/>
              Add to cart
            </button>
          </form>
        </div>
      </div>

      <div className="product__description">
        <h3 className="product__description-title">About this avocado</h3>
        <p className="product__description-text">{avo?.attributes?.description}</p>
      </div>

      <table className="product__table">
        <thead className="product__table-header">
          <tr>
            <th colSpan={2}>Attributes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="product__table-item">
            <th>Shape</th>
            <th>{avo?.attributes?.shape}</th>
          </tr>
          <tr className="product__table-item">
            <th>Hardiness</th>
            <th>{avo?.attributes?.hardiness}</th>
          </tr>
          <tr className="product__table-item">
            <th>Taste</th>
            <th>{avo?.attributes?.taste}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductItem;
