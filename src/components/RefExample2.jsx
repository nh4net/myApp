import React, { useState, useRef } from "react";

export default function RefExample2() {    
    const inputRef = useRef(null);
    
    const focusInput = () => {
        inputRef.current.focus();        
    }

    return (
    <div>
        <input ref={inputRef}></input>
        <button onClick={focusInput}>클릭</button>
    </div>
    )   
}