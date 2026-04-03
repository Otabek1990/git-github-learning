import { useEffect, useState, type ChangeEvent } from "react";
import "./Home.css";

type Product = {
    nomi: string;
    id: number;
    narxi: number;
    soni: number;
    modeli: string
};

type ApiProps = {
    data: Product[];
    first: number;
    items: number;
    last: number;
    next: number | null;
    pages: number;
    prev: number | null;
};

const PER_PAGES: number[] = [5, 10, 15, 20];

function Home() {
    const [prods, setProds] = useState<ApiProps | null>(null);
    const [sahifaRaqami, setSahifaRaqami] = useState<number>(1);
    const [limit, setLimit] = useState(5);

    const handleLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setLimit(+event.currentTarget.value);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    `http://localhost:8000/mahsulotlar?_page=${sahifaRaqami}&_per_page=${limit}`
                );
                const data = await res.json();
                setProds(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [sahifaRaqami, limit]);

    const btnsSoni = prods?.items ? Math.ceil(prods.items / limit) : 0;

    return (
        <div className="home-container">
            <h1 className="home-title">Home sahifa</h1>
            {prods && (
                <div className="product-grid">
                    {prods.data?.map((item: Product) => (
                        <div className="product-card" key={item.id}>
                            <p>Nomi: {item.nomi}</p >
                            <p>Narxi: {item.narxi}</p>
                            <p>Modeli: {item.modeli}</p>
                            <p>ID: {item.id}</p>
                            <p>Soni: {item.soni}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className="pagination-controls">
                <select
                    value={limit}
                    onChange={handleLimitChange}
                    className="limit-select"
                >
                    {PER_PAGES.map((item: number) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>

                {btnsSoni > 0 && (
                    <div className="pagination-buttons">
                        {new Array(btnsSoni).fill(1).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSahifaRaqami(index + 1)}
                                className={`page-btn ${sahifaRaqami === index + 1 ? "active" : ""}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;