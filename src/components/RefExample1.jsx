import React, { useState, useRef } from "react";

export default function RefExample1() {    
    const inputRef = useRef(null);
    
    const focusInput = () => {
        inputRef.current.focus();        
    };

    return (
    <div>
        <input ref={inputRef} ></input>
        <button onClick={focusInput}>포커싱</button>
    </div>
    )   
}