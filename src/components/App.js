import { useEffect, useState } from 'react';
import Main from './Main';

function App() {

let [playersObjects, setPlayersObjects] = useState([])
useEffect(() => {
  fetch('http://localhost:9292/athletes')
  .then ((r) => r.json())
  .then ((data) => setPlayersObjects(data))
}, [])

if (!playersObjects) {
  return <h1>Loading</h1>
}

  return (
    <div>
      <Main playersObjects = {playersObjects} setPlayersObjects={setPlayersObjects}/>
    </div>
  );
}

export default App;
