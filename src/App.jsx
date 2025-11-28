import { useState } from "react";
import { languages } from "./dati/languages";
import "./App.css";

function App() {
  const [selectlanguages, setSelectLanguages] = useState(null);

  return (
    <>
      <header>
        <h1>Learn web development</h1>
      </header>
      <div className="container">
        <div className="d-flex">
          {languages.map((language) => {
            return (
              <button
                onClick={() => setSelectLanguages(language)}
                key={language.id}
              >
                {language.title}
              </button>
            );
          })}
        </div>
        <div className="card">
          <h2>
            {selectlanguages === null
              ? "Nessun linguaggio selezionato"
              : selectlanguages.title}
          </h2>
          <p>
            {selectlanguages === null
              ? "seleziona un linguaggio"
              : selectlanguages.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
