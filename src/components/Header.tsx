import React, { useState, useEffect } from "react";
import "../App.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import calindraLogo from "../assets/img/calindra.png";
import axios from "axios";

function Header(props: any) {
  const [search, setSearch] = useState(String);

  useEffect(() => {
    setSearch(props.searchSuggestion);
    request(props.searchSuggestion);
  }, [props.searchSuggestion]);

  function request(param: any) {
    if (param) {
      axios({
        method: "get",
        url: `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${param}&source=nanook`,
        responseType: "stream",
      })
        .then((response: any) => {
          if (response.data.products.length === 0) {
            props.setError([
              "Desculpe não foi localizar o produto, tente novamente mais tarde.",
              "warning",
              "Produto não encontrado!",
            ]);
          } else {
            props.setArrayProdutos(response.data.products);
            props.setArraySuggestion(response.data.suggestions);
            props.setQueryName(param);
          }
        })
        .catch((error) => {
          props.setError([error, "warning", "Erro na pesquisa"]);
        });
    } else {
    }
  }

  return (
    <div className="App-header">
      <div className="App-form-search">
        <div className="Input-icon">
          <a href="">
            <img
              src={calindraLogo}
              alt="Calindra Inc. logo"
              width="60px"
              height="40px"
              style={{ cursor: "pointer" }}
            />
          </a>

          <input
            onKeyPress={(key) => {
              if (key.code === "Enter") {
                request(search);
              }
            }}
            type="text"
            className="form-control"
            placeholder="Buscar produtos, marcas e muito mais..."
            onChange={(t) => {
              setSearch(t.target.value);
            }}
            value={search}
          />
          <button className="App-button-search">
            <FontAwesomeIcon
              icon={faSearch}
              className="icon"
              onClick={() => {
                request(search);
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
