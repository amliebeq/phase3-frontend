import { useEffect, useState } from 'react';
import Main from './Main';

function App() {

let [playersObjects, setPlayersObjects] = useState([])
useEffect(() => {
  fetch('http://localhost:9292/athletes')
  .then ((r) => r.json())
  .then ((data) => setPlayersObjects(data))
}, [])

console.log(playersObjects)

  return (
    <div>
      <Main playersObjects = {playersObjects} />
    </div>
  );
}

export default App;
