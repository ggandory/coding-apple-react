import React from "react";
import logo from "./logo.svg";
import "./App.css";

//리액트에서 데이터 바인딩을 쉽게 할 수 있다 변수를 그냥 중괄호로 바로 표현 가능함 {변수명}
//src, id, href등의 속성에도 {변수동, 함수 등} 넣을 수 있음
//jsx에서 style 속성 집어넣을 때 style={object자료형으로 만든 스타일} 속성명:속성값
//-이거는 속성명으로 못씀 그래서 camelCase작명관습에 따라 속성명을 바꿔줘야함 예를 들어 font-size는 fontSize로 변경
function App() {
  const posts = "강남 고기 맛집";
  function act() {
    return 100;
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div className={posts} style={{ color: "blue", fontSize: "30px" }}>
          개발 Blog
        </div>
      </div>
      <img src={logo} />
      <h4>{posts}</h4>
      <h4>{act}</h4>
    </div>
  );
}

export default App;
