import React,{ useState,useEffect } from 'react';


const UseStateExample = () => {
  const [test, setTest] = useState('initail value');
  const [test2, setTest2] = useState('initail value');
  useEffect(() => {
    console.log('test state에 대해서만 호출!');
  },[]); // 첫 렌더링에만 호출
  useEffect(() => {
    console.log('첫 렌더링에만!');
    return () => {
      console.log('마지막 언마운트 시 호출!');
    }
  },[]);
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
  const [useEffectRender, setUseEffectRender] = useState(true);

  return (
    <div className="App">
      {useEffectRender && <UseStateExample />}
      <button onClick={() => setUseEffectRender(!useEffectRender)}>마지막 언마운트 호출하기!</button>
    </div>
  );
  
}




export default App;
