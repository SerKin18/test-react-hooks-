import React, { useEffect, useState } from "react";

import "./App.css";
import { ProductList } from "../ProductList/ProductList";
import { Modal } from "../Modal/Modal";
import { ModalCard } from "../ModalCard/ModalCard";
import { getData } from "../../Api";
import { Spinner } from "../Spinner/Spinner";
// import { ModalCheap } from "../ModalCheap/ModalCheap";

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
    let cheap = [];
    cheap.push(
      products.reduce((a, b) => {
        return a.price < b.price ? a : b;
      })
    );
    setProductBuy(cheap);
  };
  console.log(productBuy);

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
        <Modal toggleModal={toggleModal} isOpen={modal}>
          <ModalCard productBuy={productBuy[0]} toggleModal={toggleModal} />
        </Modal>
      </>
    </div>
  );
}
