import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  // vai ser chamado toda vez que o compnente atualizar
  useEffect(() => {
    console.log('chamou');
  });

  // vai ser chamado somente uma vez, pois não tem dependencias de atualização (array vazio ao final)
  useEffect(() => {
    console.log('chamou só uma vez');
  }, []);

  // vai ser chamado somente uma vez, pois não tem dependencias de atualização (array vazio ao final)
  useEffect(() => {
    console.log('contador mudou para', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
