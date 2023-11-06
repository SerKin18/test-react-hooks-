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
<<<<<<< HEAD
  const [cheapModal, setCheapModal] = useState(false);
  const [productBuy, setProductBuy] = useState({});
  const [cheap, setCheap] = useState({});
=======
  const [productBuy, setProductBuy] = useState({});
>>>>>>> f8c2fb2f3ea5655e3e63f2a9e15c8d05ecbd2ba7

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
<<<<<<< HEAD
  const toggleModalCheap = () => {
    setCheapModal(!cheapModal);
  };
=======
>>>>>>> f8c2fb2f3ea5655e3e63f2a9e15c8d05ecbd2ba7

  const modalProduct = (id) => {
    const productItem = products.filter((item) => item.id === id);
    setProductBuy(productItem);
  };

  const cheapestProduct = () => {
<<<<<<< HEAD
    const cheap = products.reduce((a, b) => {
      return a.price < b.price ? a : b;
    });
    setCheap(cheap);
  };
=======
    let cheap = [];
    const cheapItem = products.reduce((a, b) => {
      return a.price < b.price ? a : b;
    });
    cheap.push(cheapItem);
    setProductBuy(cheap);
  };
  console.log(productBuy);
>>>>>>> f8c2fb2f3ea5655e3e63f2a9e15c8d05ecbd2ba7

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <ProductList
          products={products}
          toggleModal={toggleModal}
          modalProduct={(id) => modalProduct(id)}
<<<<<<< HEAD
          toggleModalCheap={toggleModalCheap}
=======
>>>>>>> f8c2fb2f3ea5655e3e63f2a9e15c8d05ecbd2ba7
          cheapestProduct={cheapestProduct}
        />
      )}
      <>
<<<<<<< HEAD
        <Modal2 toggleModal={toggleModal} isOpen={modal}>
          <ModalCard productBuy={productBuy[0]} toggleModal={toggleModal} />
        </Modal2>
        <ModalCheap
          isOpen={cheapModal}
          cheapestProduct={cheap}
          toggleModalCheap={toggleModalCheap}
        />
=======
        <Modal toggleModal={toggleModal} isOpen={modal}>
          <ModalCard productBuy={productBuy[0]} toggleModal={toggleModal} />
        </Modal>
>>>>>>> f8c2fb2f3ea5655e3e63f2a9e15c8d05ecbd2ba7
      </>
    </div>
  );
}
