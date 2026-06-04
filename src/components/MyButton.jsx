import React, {useState} from "react";

export default function MyButton() { 
    const [isChecked, setIsChecked] = useState(false);
   
    const handleCheckboxChange = (event) => {
        console.log(event.target.checked);
        setIsChecked(!isChecked);
    }
    
    return (
    <div>
        <h2>약관 동의</h2>
        <label>
            <input type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            /> 
            [필수] 약관 동의
        </label>
        <br/>
        <button onClick={() => alert("가입 완료")} 
                disabled={!isChecked}> 
            가입</button>
    </div>
    )

}