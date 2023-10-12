function Item({ name, price, index }) {
  return (
    <li key={index}>
      Name: {name} / Price: {price}
      <button> Delete </button>
    </li>
  );
}

export default Item;
