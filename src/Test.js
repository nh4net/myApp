import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export default function Test() {
    const x = 5;
    const r = true;
    const f = false;
    let tuple = [123, 456, "one"];
    let arr1 = ['a', 'b', 'c'];
    let arr2 = [1, 2, 3];
    let obj = {
        a: 1, b: "test"
    };
    let a = "문자열";
    let b = 123;
    function add(x, y) {
        return x + y;
    }
    //const add2 = (x:number, y:number): number => {
    const add_test = (a, b) => {
        return a + b;
    };
    const add2 = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul2 = (a, b) => a * b;
    const div2 = (a, b) => a / b;
    const person1 = {
        name: "박인덕",
        age: 27,
    };
    person1.name = "홍길동";
    person1.age = 30;
    const person2 = {
        name: "박인덕",
        age: 27,
    };
    function func(value) {
        return value;
    }
    function MyButton({ id, title }) {
        return (_jsx("div", { children: _jsxs("button", { children: [id, " ", title] }) }));
    }
    const [value, setValue] = useState("Init String");
    function handleChange(event) {
        setValue(event.currentTarget.value);
    }
    function handleClick(event) {
        alert("click");
    }
    return (_jsxs("div", { children: [_jsx("input", { value: value, onChange: handleChange }), _jsxs("p", { children: ["value: ", value] }), _jsx("button", { onClick: handleClick, children: "Click" })] }));
}
//# sourceMappingURL=Test.js.map