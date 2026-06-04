import { useState } from "react";
import "./styles.css"; // CSS 파일을 import

export default function TodoList() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const changeInput = (str) => {
        setInput(str);
        console.log("["+input+"]");
    }

    const addTodo = () => {
        setTodos([...todos, input]);
        setInput("");
    }
    const delTodo = (del_idx) => {
        console.log("del : " + del_idx);
        const newTodos = todos.filter((todo, idx) => {
            return idx != del_idx; 
        });
        setTodos(newTodos);
    }

    return (
    <div className="container">
        <h2>할 일 목록</h2>
        <div className="input-container">
            <input type="text"
                value={input}
                onChange={(e) => changeInput(e.target.value)}
            />
            <button onClick={addTodo}>추가</button>
        </div>
        <ul className="todo-list">
        {
            todos.map((todo, index) => (
                <li key={index} className="todo-item">
                    {todo}
                    <button onClick={
                        () => {delTodo(index) }
                    }>삭제</button>
                </li>
            ))
        }
        </ul>
    </div>
    )
}
