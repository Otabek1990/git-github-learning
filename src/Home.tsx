import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
type Mahsulot = {
    id: number;
    nomi: string;
    modeli: string;
    narxi: number;
    soni: number;
};

function Home() {
    const [mahsulotlar, setMahsulotlar] = useState<Mahsulot[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const fetchMahsulotlar = async () => {
        try {
            const response = await axios.get<{ mahsulotlar: Mahsulot[] }>("http://localhost:8000/mahsulotlar");
            setMahsulotlar(response.data.mahsulotlar);
            setLoading(false);
        } catch (err) {
            setError("Ma'lumotlarni yuklashda xatolik yuz berdi.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMahsulotlar();
    }, []);

    if (loading) return <h2>Yuklanmoqda...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div className="container">
            <h1 className="title">Mahsulotlar</h1>
            <div className="grid">
                {mahsulotlar.map((item) => (
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