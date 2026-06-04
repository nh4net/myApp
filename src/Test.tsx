import { useState } from 'react'

export default function Test() {

    const x: number = 5;
    const r: true = true;
    const f: boolean = false;

    let tuple: [number, number, string] = [123, 456, "one"]

    let arr1: string[] = ['a', 'b', 'c'];
    let arr2: number[] = [ 1, 2, 3];

    let obj: { a:number, b:string } = {
        a: 1, b: "test"
    }

    let a: string = "문자열";
    let b: number = 123;



    type AddType = (a:number, b:number) => number;
    function add(x:number, y:number): number {    
        return x+y;
    }
    //const add2 = (x:number, y:number): number => {
    const add_test: AddType = (a,b) => {
        return a+b;
    }

    type Operation = {
        (a:number, b:number): number;
    }
    const add2: Operation = (a,b) => a+b;
    const sub: Operation = (a,b) => a-b;
    const mul2: Operation = (a,b) => a*b;
    const div2: Operation = (a,b) => a/b;


    interface Person {
        name: string;
        age: number;
    }
    const person1: Person = {
        name: "박인덕",
        age: 27,
    }
    person1.name = "홍길동";
    person1.age = 30;

    const person2: Person = {
        name: "박인덕",
        age: 27,
    }

    function func<T>(value:T): T {
        return value;
    }

    interface MyButtonProps {
        id: number, title: string
    }

    function MyButton( {id, title}: MyButtonProps ) { 
        return (
        <div>
            <button>{id} {title}</button>
        </div>
        )
    }
    
    const [value, setValue] = useState("Init String");

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
    }

    function handleClick(event:React.MouseEvent<HTMLElement>) {
        alert("click");
    }
    
    return (        
        <div>    
            <input value={value} onChange={ handleChange } />
            <p>value: {value}</p>
            <button onClick={ handleClick }>Click</button>
        </div>
    )
}