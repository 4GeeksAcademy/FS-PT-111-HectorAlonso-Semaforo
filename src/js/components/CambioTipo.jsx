import { useState } from "react"
import { SelectorColores } from "./SelectorColores";
import { SemaforoTemporal } from "./SemaforoTemporal";

//para esta parte del codigo, solo creamos un usestate para tipo y que un boton cmabi de uno a otro tipo con un operador ternario
export const CambioTipo = ()=> {
    const [tipo, setTipo] = useState(true);
    const seleccionTipo = () => {
        setTipo(prevTipo => !prevTipo);
    }
    return (
        <div>
            <button onClick={seleccionTipo}>
                {tipo ? "Cambiar a temporal" : "Cambiar a selector de colores"}
            </button>
            {tipo ? <SelectorColores /> : <SemaforoTemporal />}
        </div>
    );
}
