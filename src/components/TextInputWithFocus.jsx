import React, { useState, useState, useRef } from "react";

export default function TextInputWithFocusButton(props) {    
    const inputElem = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const onButtonClick = () => {
        inputElem.current.focus();             
    }
    return (
        <div>
            <input ref={inputElem}></input>                
            <button onClick={ onButtonClick }>
                Focus the input            
            </button>
        </div>
    );
}
