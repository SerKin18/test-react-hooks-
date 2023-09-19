import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "../product-list/product-list";
import Modal from "../modal/modal";
import { getData } from "../../api";
import { Spinner } from "../spinner/Spinner";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      {loading ? <Spinner /> : <ProductList products={products} />}
      <Modal />
    </div>
  );
}

export default App;
