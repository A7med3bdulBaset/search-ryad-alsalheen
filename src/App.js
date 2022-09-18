import React, { useState, useEffect } from "react"
import InputBox from "./components/InputBox";
import Results from "./components/Results";

function App() {
  const [value, setValue] = useState("من حسن إسلام المرء")
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://ahadith-api.herokuapp.com/api/search/ahadith/${value}/ar-notashkeel`)
    .then(response => response.json())
    .then(data => setData(data))
  }, [value])

  document.title = "البحث عن: " + value

  return (
    <div>
      <InputBox value={value} setValue={(para) => setValue(para)}/>
      <Results data={data.Chapter} />
    </div>
  );
}

export default App;
