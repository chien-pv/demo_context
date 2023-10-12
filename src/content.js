import { useRef, useMemo, useContext } from "react";
import ProductContext from "./context";
import Item from "./Item";

function Content() {
  let store = useContext(ProductContext);
  let products = store.state;
  let handleAdd = store.handleAdd;

  let ipName = useRef();
  let ipPrice = useRef();

  let totals = useMemo(() => {
    console.log("useMemo");
    return products.reduce(
      (partialSum, item) => partialSum + parseInt(item.price),
      0
    );
  }, [products]);
  let datas = products.map((product, index) => {
    return <Item {...product} index />;
  });
  return (
    <div>
      <form>
        <label>Name </label>
        <input ref={ipName} /> <br />
        <label>Price </label>
        <input ref={ipPrice} /> <br />
        <button
          onClick={() => {
            let name = ipName.current.value;
            let price = ipPrice.current.value;
            handleAdd(name, price);
          }}
          type="button"
        >
          Add Product
        </button>
      </form>
      <h3>{totals}</h3>
      <ol>{datas}</ol>
    </div>
  );
}

export default Content;
