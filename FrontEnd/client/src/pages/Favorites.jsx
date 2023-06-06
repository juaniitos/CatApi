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
        <div >
        <h1>Lista de Gatos Favoritos</h1>
                {
                    cats.map((cat) => (
                        <div key={cat.id} className="card-favorites">
                            {cat.fauvorite == true ? 
                            <h2>Nombre: {cat.name}</h2>
                            : null}
                            {cat.fauvorite == true ?
                            <h3>Raza: {cat.race}</h3>
                            : null
                            }
                            {cat.fauvorite == true ?
                            <h3>Edad: {cat.age}</h3>
                            : null
                            }
                            {cat.fauvorite == true ?
                            <h3>Favorito: <input type="checkbox" defaultChecked disabled placeholder="Favorito"/>  </h3>
                            : null
                            }
                            {cat.fauvorite == true ?
                            <img src={cat.photo}  alt="foto" className="w-24 h-24 "/>
                            : null
                            }
                        </div>
                    ))
                }
        </div>        
        </div>
    )
}

//<input>Favorito: </input> 