import React, { useEffect, useState } from "react";

import "./App.css";
import { ProductList } from "../ProductList/ProductList";
<<<<<<< HEAD
import { Modal2 } from "../Modal/Modal";
import { ModalCard } from "../ModalCard/ModalCard";
import { getData } from "../../Api";
import { Spinner } from "../Spinner/Spinner";
import { ModalCheap } from "../ModalCheap/ModalCheap";
=======
import { Modal } from "../Modal/Modal";
import { ModalCard } from "../ModalCard/ModalCard";
import { getData } from "../../Api";
import { Spinner } from "../Spinner/Spinner";
// import { ModalCheap } from "../ModalCheap/ModalCheap";
>>>>>>> f8c2fb2f3ea5655e3e63f2a9e15c8d05ecbd2ba7

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
    const cheapItem = products.reduce((a, b) => {
      return a.price < b.price ? a : b;
    });
    cheap.push(cheapItem);
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
