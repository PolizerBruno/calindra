import "../App.css";

function Suggestion(props: any) {
  return (
    <div className="App-Suggestion">
      <h3 className="query-name">{props.queryName}</h3>
      <h4>Buscas relacionadas</h4>
      <div className="App-Suggestion-list">
        {props.arraySuggestion.map((s: any) => {
          return (
            <button
              key={s + Math.random()}
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
