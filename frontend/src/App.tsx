import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <h1>Frontend Running</h1>
  )
}

export default App