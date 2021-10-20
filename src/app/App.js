import React, { useEffect, useState } from 'react';
function App(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);

  useEffect(()=>{
      alert(name)
  },[name])
    return (
      <div>
        <p style={{color: count<0 ? "red":"black"}}> {count} </p>
        <p style={{color: name<0 ? "red":"black"}}> {name} </p>

        <button  onClick={() => setCount(count + 1)}>
        count + 
        </button>
        <button onClick={() => setCount(count -1)}>
        count -
        </button>
        <button  onClick={() => setName(name + 1)}>
        name+
        </button>
        <button onClick={() => setName(name -1)}>
        name -
        </button>
      </div>
    );
  }

export default App;