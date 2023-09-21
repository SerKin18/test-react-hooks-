import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { ProductList } from "../productList/ProductList";
import { Modal } from "../modal/Modal";
import { getData } from "../../api";
import { Spinner } from "../spinner/Spinner";

const portal = document.getElementById("modal");

export function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [productBuy, setProductBuy] = useState({});
  useEffect(() => {
    setLoading(true);
    getData().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const modalProduct = (id) => {
    const productItem = products.filter((item) => item.id === id);
    setProductBuy(productItem);
  };

  const cheapestProduct = () => {
    const cheap = products.reduce((a, b) => {
      return a.price < b.price ? a.price : b.price;
    });
    return cheap;
  };
  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <ProductList
          products={products}
          toggleModal={toggleModal}
          modalProduct={(id) => modalProduct(id)}
          cheapestProduct={cheapestProduct}
        />
      )}
      <>
        {modal
          ? ReactDOM.createPortal(
              <Modal toggleModal={toggleModal} productBuy={productBuy} />,
              portal
            )
          : null}
      </>
    </div>
  );
}
