import { useEffect, useState } from "react";
import {getAllCats} from '../api/cats.api.js'
import { CatCard } from "./CatCard.jsx";

export function CatsList() {
    const [cats, setCats] = useState([]);

useEffect(() => {
    async function loadCats() {
        const res = await getAllCats();
        setCats(res.data);
        console.log(res.data)
    }
    loadCats();
}, [])

    return (
        <div>
            <h1>Lista de Gatos</h1>
            <div className="card grid grid-col-2 gap-3 " >
                {
                    cats.map((cat) => (
                        <CatCard key={cat.id} cat={cat}/>
                    ))
                }
                
            </div>
        </div>
    )
}