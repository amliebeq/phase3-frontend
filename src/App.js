
import { useEffect, useState } from 'react';

function App() {
let [data, setdata] = useState([])
useEffect(() => {
  fetch('http://localhost:9292/athletes')
  .then ((r) => r.json())
  .then ((data) => setdata(data))
}, [])

console.log(data)

  return (
    <div className="App">
      <h1></h1>
    </div>
  );
}

export default App;
