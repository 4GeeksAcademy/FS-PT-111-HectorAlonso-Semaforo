import React, { useState, useEffect } from 'react';   

/* en esta version del semaforo, se inicia con el color rojo, y cada 2 segundos cambia al siguiente color
usando un useEffect para iniciar el temporizador al cargar el componente
y un useState para manejar el color actual y el temporizador.
en este caso me he tenido que ayudar bastante con la IA para conseguirlo, por que me cuesta sacar el useEffect */

export const SemaforoTemporal = () => {

    const[color, setColor] = useState("red");
    const [temporizador, setTemporizador] = useState(null);

    useEffect(() => {
        empezarTemporizador("red");
    }, []);

        const empezarTemporizador = (siguienteColor) => {
            if (temporizador) {
                clearTimeout(temporizador);
            }
            setColor(siguienteColor);
                const Siguiente = siguienteColor == "red" ? "yellow" : siguienteColor == "yellow" ? "green" : "red";
            const nuevoTemporizador = setTimeout(() => empezarTemporizador(Siguiente), 2000);
            setTemporizador(nuevoTemporizador);
        };
    
        return (
        <div className="ContenedorSemaforo">
            <h1>Semaforo Temporal</h1>
            <div className="CuadroSemaforo">
                <div className="colorSemaforo" style={{ backgroundColor: color === "red" ? "red" : "gray" }} />
                <div className="colorSemaforo" style={{ backgroundColor: color === "yellow" ? "yellow" : "gray" }} />
                <div className="colorSemaforo" style={{ backgroundColor: color === "green" ? "green" : "gray" }} />
            </div>
        </div>
    );
}


        