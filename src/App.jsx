import { useState } from "react";
import { languages } from "./dati/languages";
import "./App.css";
import Card from "./components/Card";

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
                className={
                  selectlanguages && selectlanguages.id === language.id
                    ? `col-${language.id}`
                    : ""
                }
              >
                {language.title}
              </button>
            );
          })}
        </div>
        <Card selectlanguages={selectlanguages} />
      </div>
    </>
  );
}

export default App;
