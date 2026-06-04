import React, { useState } from 'react';

const ComponentC = ({ temp, changeTemp }) => {
    return (
        <div>
            <span>단위(섭씨) : </span>
            <input type="number" value={temp}
                onChange={(e) => changeTemp(e.target.value)} />
        </div>
    )
}
const ComponentF = ({ temp, changeTemp }) => {
    return (
        <div>
            <span>단위(화씨) : </span>
            <input type="number" value={temp}
                onChange={(e) => changeTemp(e.target.value)} />
        </div>
    )
}

export default function Calculator() {
    const [temperature, setTemperature] = useState(0);
    const [type, setType] = useState('c');

    const toFahrenheit = (celsius) => { // 섭씨->화씨
        return ((celsius * 9) / 5 + 32).toFixed(1);
    }
    const toCelsius = (fahrenheit) => { // 화씨->섭씨
        return (((fahrenheit - 32) * 5) / 9).toFixed(1);
    }
    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setType('c');
    };
    const handleFahrenheitChange = (temp) => {
        setTemperature(temp);
        setType('f');
    };
    const celsius = type == "c" ?
        temperature : toCelsius(temperature);
    const fahrenheit = type == "f" ?
        temperature : toFahrenheit(temperature);
    return (
        <div>
            <h2>온도 변환</h2>
            <ComponentC temp={celsius}
                changeTemp={handleCelsiusChange} />
            <ComponentF temp={fahrenheit}
                changeTemp={handleFahrenheitChange} />
        </div>
    );
}



















