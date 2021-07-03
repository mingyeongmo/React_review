import React,{ useState,useEffect } from 'react';


const UseStateExample = () => {
  const [test, setTest] = useState('initail value');
  const [test2, setTest2] = useState('initail value');
  useEffect(() => {
    console.log('test state에 대해서만 호출!');
  },[]); // 첫 렌더링에만 호출
  useEffect(() => {
    console.log('test2 state에 대해서만 호출!');
  },[test2]);
  return (
    <div>
      <p>{test}</p>
      <p>{test2}</p>
      <input onChange={(e) => {setTest(e.target.value)}} />
      <input onChange={(e) => {setTest2(e.target.value)}} />
    </div>
  )
}

function App() {
  return (
    <div>
      <UseStateExample />
 
    </div>
    
  );
  
}




export default App;
