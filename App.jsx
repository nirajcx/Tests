import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./secondSlice";

function App() {
  const dispatch = useDispatch();
  const x = useSelector((state) => state);

  const { products, loading } = useSelector((state) => state.products);



  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
