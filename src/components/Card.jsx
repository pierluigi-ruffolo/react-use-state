export default function Card({ selectlanguages }) {
  return (
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
  );
}
