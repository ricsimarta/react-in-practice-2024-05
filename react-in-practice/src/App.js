import { useEffect, useState } from "react";
import Spells from "./components/Spells";
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/spells")
      .then(res => res.json())
      .then(resData => setData(resData));
  }, []);

  // console.log("data:", data);

  return (
    <div className="App">
      {data && <Spells data={data} />}
    </div>
  );
}

export default App;
