import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import Error from "./components/Error";
import Product from "./components/Product";
import Suggestion from "./components/Suggestion";
import ProductDetail from "./components/ProductDetail";
function App() {
  const [error, setError] = useState(Array);
  const [arrayProdutos, setArrayProdutos] = useState(Array);
  const [arraySuggestion, setArraySuggestion] = useState(Array);
  const [queryName, setQueryName] = useState(String);
  const [searchSuggestion, setSearchSuggestion] = useState(String);
  const [showDetailProduct, setShowDetailProduct] = useState(Boolean(false));
  const [currentProduct, setCurrentProduct] = useState(Array);

  return (
    <div className="App">
      {error.length > 0 ? (
        <Error
          setError={setError}
          errorCategory={String(error[1])}
          errorTitle={String(error[2])}
          errorMessage={String(error[0])}
        />
      ) : (
        false
      )}
      <Header
        setError={setError}
        setQueryName={setQueryName}
        setArrayProdutos={setArrayProdutos}
        setArraySuggestion={setArraySuggestion}
        searchSuggestion={searchSuggestion}
      />
      <div className="body">
        {showDetailProduct ? (
          <ProductDetail
            currentProduct={currentProduct}
            queryName={queryName}
            setQueryName={setQueryName}
            setShowDetailProduct={setShowDetailProduct}
          />
        ) : (
          <div className="main">
            {arraySuggestion.length > 0 ? (
              <Suggestion
                queryName={queryName}
                arraySuggestion={arraySuggestion}
                setSearchSuggestion={setSearchSuggestion}
              />
            ) : (
              false
            )}
            {arrayProdutos.length > 0 ? (
              <div className="product-list">
                {arrayProdutos.map((p) => {
                  return (
                    <Product
                      product={p}
                      setShowDetailProduct={setShowDetailProduct}
                      setCurrentProduct={setCurrentProduct}
                    />
                  );
                })}
                <p>
                  O frete grátis está sujeito ao peso, preço e distância do
                  envio.
                </p>
              </div>
            ) : (
              false
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
