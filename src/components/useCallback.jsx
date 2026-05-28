import React, { useState, useCallback} from "react";

const Child = React.memo(({ onClick }) => {
  console.log("자식 렌더링");
  return <button onClick={onClick}>클릭</button>;
});

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  
  const handleClick = () => {
    console.log("버튼 클릭");
  };
  /*
  const handleClick = useCallback(() => {
    console.log("버튼 클릭");
  });
  */

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>

      <input value={text} onChange={(e) => setText(e.target.value)} />

      <Child onClick={handleClick} />
    </div>
  );
}
