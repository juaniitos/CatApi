import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCat } from "../api/cats.api";
import { toast } from "react-hot-toast";

export function CatCard( {cat} ) {
    
    const  navigate = useNavigate();
    const params = useParams({cat});
    
    return (
        <div className="bg-sky-100 rounded-xl p-3 hover:bg-stone-100 hover:cursor-pointer items-center " 
            
        >
            <h2>Nombre: {cat.name}</h2>
            <h3>Raza: {cat.race}</h3>
            <p>Edad: {cat.age}</p>
            <img src={cat.photo} alt="foto" className="w-24 h-24 "/>
            <h3>Favorito: {cat.fauvorite == true ? <input type="checkbox" defaultChecked disabled/> : <input type="checkbox" defaultValue={false} disabled/> }</h3>
            <br/>
            <hr className="lineaSeparadora" />
            <br/>
            <div className="botones">
                <button className="btn btn--primary"
                    onClick={() => {
                        navigate(`/cats/${cat.id}`)
                    }}
                >Editar</button>
                <button className="btn btn--secondary" 
                    onClick={async () => {
                    const accepted = window.confirm('Are you sure?')
                    if (accepted) {
                        await deleteCat(cat.id);
                        toast.success('Datos Borrados', {
                            position: "bottom-right"
                        });
                        navigate('/cats')
                    }
                    }}>Delete</button>
            </div>
        </div>
    )
}