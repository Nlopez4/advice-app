import { useState, useEffect } from 'react';
import './styles/App.css';

function App() {

  const [advice, setAdvice] = useState([]);


  useEffect(() => {
    requestAdvice();
  }, []);
  async function requestAdvice() {
    const res = await fetch('	https://api.adviceslip.com/advice');
    const json = await res.json();
    setAdvice(json);
    
  };

 return (
  <div>
    {Object.values(advice).map(advice => {
      return (
        <div key={advice.id}>
          <p>Advice #{advice.id}</p>
          <h1>{advice.advice}</h1>
        </div>
      )
    })}
    <button onClick={requestAdvice}className="click-btn">Click</button>
  </div>
 )

}

export default App;
