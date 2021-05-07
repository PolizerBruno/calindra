import React, { useState, useEffect } from "react";
import "../App.css";
import product from "../assets/img/Caixas_capa.png";

function Suggestion(props: any) {
  const [value, setValue] = useState(Number);
  useEffect(() => {
    setValue(Number((Math.random() * 10000).toFixed(2)));
  }, []);
  return (
    <div className="App-Suggestion">
      <h3 className="query-name">{props.queryName}</h3>
      <h4>Buscas relacionadas</h4>
      <div className="App-Suggestion-list">
        {props.arraySuggestion.map((s: any) => {
          return (
            <button
              onClick={() => {
                props.setSearchSuggestion(s.term);
              }}
              className="App-button-suggestion"
            >
              {s.term}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestion;
