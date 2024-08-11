1. 폼(Form) 처리
   리액트에서 폼 처리는 입력된 데이터를 관리하고, 제출할 때 그 데이터를 처리하는 방법이야. 보통 useState를 사용해서 입력된 값을 관리하고, 폼을 제출할 때는 특정 함수를 호출해서 데이터를 처리하지.

예시 코드:

jsx 파일

import React, { useState } from 'react';

function MyForm() {
const [formData, setFormData] = useState({ name: '', email: '' });

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();
console.log('Form submitted:', formData);
};

return (

<form onSubmit={handleSubmit}>
<div>
<label>Name:</label>
<input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
</div>
<div>
<label>Email:</label>
<input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
</div>
<button type="submit">Submit</button>
</form>
);
}

export default MyForm;
여기서는 이름이랑 이메일을 입력받는 폼을 만들었어. useState로 입력된 값을 관리하고, 폼을 제출할 때는 handleSubmit 함수에서 그 데이터를 처리해.

2. 라우터(Router)
   리액트에서 라우터는 페이지 간 이동을 관리해주는 거야. react-router-dom이라는 라이브러리를 사용해서 페이지 이동을 쉽게 구현할 수 있어.

예시 코드:

jsx 파일

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
return <h2>Home</h2>;
}

function About() {
return <h2>About</h2>;
}

function App() {
return (
<Router>

<nav>
<Link to="/">Home</Link> | <Link to="/about">About</Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>
</Router>
);
}

export default App;
이 코드를 보면, react-router-dom을 이용해서 페이지를 이동할 수 있어. / 경로로 가면 Home 컴포넌트가 보이고, /about 경로로 가면 About 컴포넌트가 보이게 되는 거야.

3. 메모(Memoization)
   메모는 컴포넌트가 불필요하게 다시 렌더링되지 않도록 최적화하는 방법이야. React.memo, useMemo, useCallback 같은 걸 사용해서 구현할 수 있어.

예시 코드:

jsx
코드 복사
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ num }) {
console.log('Calculating...');
return num \* 2; // 예를 들어 간단한 계산
}

const MemoizedCalculation = React.memo(ExpensiveCalculation);

function MyComponent() {
const [count, setCount] = useState(0);
const [value, setValue] = useState(10);

const calculatedValue = useMemo(() => {
return value \* 2; // 복잡한 계산이라고 가정
}, [value]);

return (
<div>
<h1>Count: {count}</h1>
<button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Calculated Value: {calculatedValue}</h2>
      <button onClick={() => setValue(value + 5)}>Change Value</button>

      <MemoizedCalculation num={value} />
    </div>

);
}

export default MyComponent;
이 코드에서는 useMemo로 계산된 값을 메모이제이션하고 있어. 즉, value가 바뀔 때만 계산을 다시 하고, 그렇지 않으면 이전 계산 값을 그대로 사용해. 그리고 React.memo를 이용해서 MemoizedCalculation 컴포넌트가 불필요하게 다시 렌더링되지 않게 했어.

대충 요약하면
폼(Form) 처리: useState로 폼 데이터를 관리하고 제출할 때 처리하는 방법.
라우터(Router): react-router-dom으로 페이지 이동을 관리하는 방법.
메모(Memoization): React.memo, useMemo로 컴포넌트를 최적화하는 방법.
