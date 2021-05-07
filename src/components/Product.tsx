import React, { useState, useEffect } from "react";
import "../App.css";
import product from "../assets/img/Caixas_capa.png";

function Product(props: any) {
  const [value, setValue] = useState(Number);
  useEffect(() => {
    setValue(Number((Math.random() * 10000).toFixed(2)));
  }, []);
  console.log(props);
  return (
    <div className="App-product">
      <img src={product} width="160px" height="160px" />
      <div className="product-description">
        <button className="product-name" onClick={()=>{props.setShowDetailProduct(true);props.setCurrentProduct({'name' : props.product.name,'value':value})}}>{props.product.name}</button>
        <p className="product-price">R${value}</p>
        <p className="product-installments">em 12x R${Number(value/12).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Product;
