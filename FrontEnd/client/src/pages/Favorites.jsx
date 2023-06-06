import { useEffect, useState } from "react";
import {getAllCats} from '../api/cats.api.js'
/* import { CatCard } from "./CatCard.jsx"; */

export function Favorites() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        async function loadCats() {
            const res = await getAllCats();
            setCats(res.data);
        }
        loadCats();
    }, [])
    return (
       <div>
        {console.log("CATS",cats)}
        <div >
        <h1>Gatos Favoritos</h1>
                {
                    cats.map((cat) => (
                        <div key={cat.id}>
                            {cat.fauvorite == true ? 
                            <h2>Nombre: {cat.name}</h2>
                            : console.log("ERROR")
                        }
                        </div>
                    ))
                }
                
            </div>
       </div>
    )
}