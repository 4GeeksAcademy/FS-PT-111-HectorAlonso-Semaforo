//creamos la clase y el usestaye para el color, despues con el onclick seleccionamos el color y es el que presenta
import { useState } from "react"

export const SelectorColores = () => {

    const [color, setColor] = useState("red")


    return(
        <div>
            <div className="ContenedorSemaforo">
                <h1>Selector de colores</h1>
                <div className="CuadroSemaforo">
                    <div className="colorSemaforo" style={{backgroundColor: color === "red" ? "red": "gray"}} onClick={() => setColor("red")}/>
                    <div className="colorSemaforo" style={{backgroundColor: color === "yellow" ? "yellow": "gray"}} onClick={() => setColor("yellow")}/>
                    <div className="colorSemaforo" style={{backgroundColor: color === "green" ? "green": "gray"}}  onClick={() => setColor("green")}/>
                </div>  
            </div>
        </div>
    )
}