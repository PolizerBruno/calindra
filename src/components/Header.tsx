import { useState, useEffect } from "react";
import "../App.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import calindraLogo from "../assets/img/calindra.png";
import { request } from "../services/request";

function Header(props: any) {
  const [search, setSearch] = useState(String);

  useEffect(() => {
    setSearch(props.searchSuggestion);
    request(
      props.searchSuggestion,
      props.setArrayProdutos,
      props.setArraySuggestion,
    );
  }, [props.searchSuggestion]);

  return (
    <div className="App-header">
      <div className="App-form-search">
        <div className="Input-icon">
          <a href="/">
            <img
              src={calindraLogo}
              alt="Calindra Inc. logo"
              width="60"
              height="40"
            />
          </a>

          <input
            onKeyPress={(key) => {
              if (key.code === "Enter") {
                request(
                  search,
                  props.setArrayProdutos,
                  props.setArraySuggestion
                )?.then((res) => {
                  if (res) {
                    props.setError(res);
                  }
                });
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
                request(
                  search,
                  props.setArrayProdutos,
                  props.setArraySuggestion
                )?.then((res) => props.setError(res));
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
