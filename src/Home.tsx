import { useEffect, useState, type ChangeEvent } from "react";
import "./Home.css";

type Product = {
    nomi: string;
    id: number;
    narxi: number;
    soni: number;
    modeli: string;
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
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nomi</th>
                            <th>Modeli</th>
                            <th>Narxi</th>
                            <th>Soni</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prods.data.map((item: Product) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nomi}</td>
                                <td>{item.modeli}</td>
                                <td>{item.narxi}</td>
                                <td>{item.soni}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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