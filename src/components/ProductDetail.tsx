import "../App.css";
import product00 from "../assets/img/Caixas_capa.png";
import product01 from "../assets/img/Caixas01.png";
import product02 from "../assets/img/caixas02.jpg";
import product03 from "../assets/img/caixas03.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ProductDetail(props: any) {
  return (
    <div className="App-Detail">
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
            props.setShowDetailProduct(false);
          }}
        >
          {props.queryName}
        </button>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <Carousel
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            showArrows={true}
          >
            <div >
              <img src={product00} alt={'Produto'} />
            </div>
            <div >
              <img src={product01} alt={'Produto'} />
            </div>
            <div>
              <img src={product02} alt={'Produto'} />
            </div>
            <div>
              <img src={product03}alt={'Produto'} />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="Details-container">
        <p className="product-price">{props.currentProduct.name}</p>
        <p className="product-price">R${props.currentProduct.value}</p>
        <p className="product-installments">
          em 12x R${Number(props.currentProduct.value / 12).toFixed(2)}
        </p>
        <button className="btn-success">Comprar agora</button>
      </div>
    </div>
  );
}

export default ProductDetail;
