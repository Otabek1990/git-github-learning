import data from "../backend/db.json";
import "./index.css";

function Home() {
  return (
    <div className="container">
      <h1 className="title">Mahsulotlar</h1>

      <div className="grid">
        {data.mahsulotlar.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.nomi}</h3>
            <p><b>Model:</b> {item.modeli}</p>
            <p><b>Narxi:</b> {item.narxi}$</p>
            <p><b>Soni:</b> {item.soni}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;