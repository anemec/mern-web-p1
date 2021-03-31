import React from "react";

const ProductBox = ({ box: { name, category, items } }) => {
  return (
    <div className="box">
      <h1>{name}</h1>
      <h3>{category}</h3>
      {items.map((product) => (
        <p>{product}</p>
      ))}
    </div>
  );
};

export default ProductBox;
