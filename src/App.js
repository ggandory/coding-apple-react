import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//리액트에서 데이터 바인딩을 쉽게 할 수 있다 변수를 그냥 중괄호로 바로 표현 가능함 {변수명}
//src, id, href등의 속성에도 {변수동, 함수 등} 넣을 수 있음
//jsx에서 style 속성 집어넣을 때 style={object자료형으로 만든 스타일} 속성명:속성값
//-이거는 속성명으로 못씀 그래서 camelCase작명관습에 따라 속성명을 바꿔줘야함 예를 들어 font-size는 fontSize로 변경
//state는 변수 대신 데이터 저장공간이고, useState()를 이용해 만들어야 함
/*이벤트 다루는법 onClick={클릭될 때 실행할 함수}   onClick={()=>{실행할 내용}}*/
//[state, state변경함수] 무조건 state변경함수로 변경해준다.
function App() {
  const [글제목, 글제목변경] = useState([
    "개발자란 무엇인가?",
    "클린코딩의 정석",
    "앞으로 개발자의 미래는?",
  ]);
  const [thumb, setThumb] = useState(0);
  const [showImage, setShowImage] = useState(false); // 이미지 표시 여부 상태 추가
  const posts = "강남 고기 맛집";
  const newArray = [...글제목]; //deep copy로써 값공유x 서로 독립적인 값을 가지는 복사이다. (state는 직접 건드리는건 옳지 못함)
  newArray[0] = "여자코트 추천";
  newArray.sort();
  return (
    <div className="App">
      <div className="black-nav">
        <div className={posts} style={{ color: "blue", fontSize: "30px" }}>
          개발 Blog
        </div>
      </div>
      <button
        className="changeTitle"
        onClick={() => {
          글제목변경(newArray);
        }}
      >
        제목 변경
      </button>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              setThumb(thumb + 1);
            }}
          >
            👍🏻
          </span>
          {thumb}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
      <listUp numb={2} numb1={19} />

      <Modal /**html을 한단어로 줄여서 쓸 수 있는 방법: 리액트의 component문법임 */
      ></Modal>
      {/* 이미지 표시 토글 버튼 추가 */}
      <button
        onClick={() => {
          setShowImage(!showImage);
        }}
      >
        이미지 {showImage ? "숨기기" : "보이기"}
      </button>

      {/* showImage 상태에 따라 이미지 표시 */}
      {showImage && (
        <img
          src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.iconsumer.or.kr%2Fnews%2Fphoto%2F202407%2F26604_33934_2957.jpg&type=l340_165"
          alt="Image"
          style={{ width: "200px" }}
        />
      )}
    </div>
  );
}
//component는 이름을 첫글자는 대문자로 만든다. 그리고 return()안에 있는건 태그 하나로 묶어야함
function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

function ListUp({ numb = 1, numb1 = 18 }) {
  return (
    <>
      <div className="list">
        <h3>{글제목[numb]}</h3>
        <p>2월 {numb1}일 발행</p>
        <hr />
      </div>
    </>
  );
}

/**
 * DefaultProps 사용
function ListUp({ numb, numb1 }) {
  return (
    <div className="list">
      <h3>{글제목[numb]}</h3>
      <p>2월 {numb1}일 발행</p>
      <hr />
    </div>
  );
}

ListUp.defaultProps = {
  numb: 1,
  numb1: 18,
};
이런식으로도 쓸 수 있네

그리고
객체 형태로 props 받기
function ListUp({ data }) {
  const { numb = 1, numb1 = 18 } = data;
  return (
    <div className="list">
      <h3>{글제목[numb]}</h3>
      <p>2월 {numb1}일 발행</p>
      <hr />
    </div>
  );
}

// 사용하는 곳
<ListUp data={{ numb: 2, numb1: 19 }} />

 */
/*만약 상세페이지를 만들고 싶다면
1. 라우터 설치 되어 있어야 하고(npm install react-router-dom)

2. App.js 파일 수정
기존 코드에 React Router를 추가하여 각 글 제목을 클릭하면 상세페이지로 이동하도록 설정한다.

	3.	Detail 컴포넌트 추가
상세페이지를 위한 Detail 컴포넌트를 추가하고, 각 글 제목을 클릭하면 해당 글의 상세페이지로 이동하도록 설정하도록 한다. */
export default App;

//2부 들었는데 특별히 적을 개념은 없는듯
//빈깡통으로 그냥 저장
