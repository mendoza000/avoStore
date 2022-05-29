import { productsWrite } from "store/actions/products.actions";

const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");

export const getProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.products);

  useEffect(() => {
    fetch("/api/avo")
      .then((resp) => resp.json())
      .then(({ avos }) => {
        if (avos !== products) {
          dispatch(productsWrite(avos));
        }
      });
  }, []);
};
