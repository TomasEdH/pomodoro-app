import { useState, useEffect } from 'react';

export default function useTemporizador(minutosIniciales = 5, segundosIniciales = 0) {

    const [minutos, setMinutos] = useState(minutosIniciales)
    const [segundos, setSegundos] = useState(segundosIniciales)
    const [iniciar, setIniciar] = useState(false)
    const [alerta, setAlerta] = useState(false)

    useEffect(() => {
        let timer
        if (iniciar && minutos >= 0 && segundos >= 0) {
            timer = setInterval(() => {
                if (segundos === 0) {
                    if (minutos === 0) {
                        setAlerta(true)
                        clearInterval(timer)
                    } else {
                        setMinutos(minutos - 1)
                        setSegundos(59)
                    }
                } else {
                    setSegundos(segundos - 1)
                }

            }, 1000);
        }
        return () => clearInterval(timer)
    }, [iniciar, minutos, segundos])
    
    const handleIniciar = () => {
        setIniciar(true)
    };
    
    const handleDetener = () => {
        setIniciar(false)
    };
    
    
    const handleReiniciar = (minutosIniciales = 5, iniciar = true) => {
        setMinutos(minutosIniciales)
        setSegundos(segundosIniciales)
        setIniciar(iniciar)
        setAlerta(false)
    };

    return {
        minutos,
        setMinutos,
        segundos,
        setSegundos,
        iniciar,
        setIniciar,
        alerta,
        setAlerta,
        handleIniciar,
        handleDetener,
        handleReiniciar,
    }
}
