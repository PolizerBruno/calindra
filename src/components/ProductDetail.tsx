import React, { useState, useEffect } from "react";
import "../App.css";
import product00 from "../assets/img/Caixas_capa.png";
import product01 from "../assets/img/Caixas01.png";
import product02 from "../assets/img/caixas02.jpg";
import product03 from "../assets/img/caixas03.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProductDetail(props: any) {
  console.log(props);
  return (
    <div>
      <p>
        <button
          className="App-button-suggestion"
          onClick={() => {
            props.setShowDetailProduct(false);
          }}
        >
          Voltar a lista
        </button>
        <button
          className="App-button-suggestion-blue"
          onClick={() => {
            props.setQueryName(props.queryName);
            props.setShowDetailProduct(false);
          }}
        >
          {props.queryName}
        </button>
      </p>
      <div className="App-Detail">
        <Carousel
          autoPlay={true}
          dynamicHeight={false}
          emulateTouch={true}
          infiniteLoop={true}
          showArrows={true}
          width={800}
        >
          <div>
            <img src={product00} />
          </div>
          <div>
            <img src={product01} />
          </div>
          <div>
            <img src={product02} />
          </div>
          <div>
            <img src={product03} />
          </div>
        </Carousel>

        <div className="Details-container">
          <p className="product-price">{props.currentProduct.name}</p>
          <p className="product-price">R${props.currentProduct.value}</p>
          <p className="product-installments">
            em 12x R${Number(props.currentProduct.value / 12).toFixed(2)}
          </p>
          <button className="btn-success">Comprar agora</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
