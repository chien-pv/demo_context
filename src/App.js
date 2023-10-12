import "./App.css";
import { useState, useCallback } from "react";
import Main from "./main";
import ProductContext from "./context";

function App() {
  // let [show, setShow] = useState(false);

  const [count, setCount] = useState(0);
  let [products, setProducts] = useState([
    {
      name: "Banh mi",
      price: 2000,
    },
  ]);

  const handleCount = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  function handleAdd(name, price) {
    let obj = {
      name,
      price,
    };
    setProducts([obj, ...products]);
  }

  return (
    <ProductContext.Provider
      value={{
        state: products,
        handleAdd: handleAdd,
      }}
    >
      <div className="App">
        <h1>{count}</h1>
        <button onClick={handleCount}>Count</button>
        <br />
        <br />
        <Main />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
