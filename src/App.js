import React,{ useState } from 'react';


const UseStateExample = () => {
  const [test, setTest] = useState('initail value');

  return (
    <div>
      <p>{test}</p>
      <input onChange={(e) => {setTest(e.target.value)}} />
      
    </div>
  )
}

function App() {
  return (
    <div>
      <UseStateExample />
      <Name name="doit" color="red"/>
 
    </div>
    
  );
  
}

function Name({name,color}) {
  return (
    <div>
      <div style = {{color}}>my name is {name}</div>
    </div>
    
  )
}



export default App;
