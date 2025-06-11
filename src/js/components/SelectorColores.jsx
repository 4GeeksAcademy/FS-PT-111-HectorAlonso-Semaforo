//para este semaforo, seleciona un color y cambia el color del semaforo
//usando un usestate y dentro del returno un operador ternarios que alterna entre el color seleccionado y gris
//despues un onlick que cambia el set color
//al principio, para probar lo habia hecho a traves de botones, que he dejado ese codigo comentado, se puede ver el fincionamiento descomentando elcodigo
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

            {/*<br />
            <button style={{backgroundColor: "red"}} onClick={()=> setColor("red") }>rojo</button>
            <button style={{backgroundColor: "yellow"}} onClick={()=> setColor("yellow") }>amarillo</button>
            <button style={{backgroundColor: "green"}} onClick={()=> setColor("green") }>verde</button>
            */}
        </div>
    )
}