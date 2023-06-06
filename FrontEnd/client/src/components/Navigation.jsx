import { Link } from "react-router-dom";


export function Navigation() {
    return (
        <div className="title">
            <div className="header">
            <Link to="/">Aplicacion de Gatos</Link>
            </div>
            <div className="header">
            <Link to="/cats-create">Gato Nuevo</Link>
            </div>
            <div className="header">
            <Link to="/favoritos">Favoritos</Link>
            </div>
        </div>
    )
}