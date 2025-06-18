import React, { useState, useEffect } from 'react';   
/*creamos el usestate para el color
despues en el useefect un temporizador con setimeout de 2 segundos y alterna entre los diferentes if
luego ya dentro del return con un operador ternario alterna entre el color del semaforo y el gris
si color es = a su color correspondiente pone su color y si no se queda en gris*/
export const SemaforoTemporal = () => {
    const [color, setColor] = useState("red");

        useEffect(() =>{
          const temporizador = setTimeout(() =>{
            if(color === "red"){
                setColor("yellow");
            }else if(color === "yellow"){
                setColor("green")
            }else if(color === "green"){
                setColor("red")
            }
          },2000)
        })
    return(
        <div className="ContenedorSemaforo">
            <h1>Semaforo Temporal</h1>
            <div className="CuadroSemaforo">
                <div className="colorSemaforo" style={{ backgroundColor: color === "red" ? "red" : "gray" }} />
                <div className="colorSemaforo" style={{ backgroundColor: color === "yellow" ? "yellow" : "gray" }} />
                <div className="colorSemaforo" style={{ backgroundColor: color === "green" ? "green" : "gray" }} />
            </div>
        </div>
    )
}


        