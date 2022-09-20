import React, { useState, useEffect, useTransition } from "react"
import InputBox from "./components/InputBox";
import Results from "./components/Results";

function App() {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    fetch(`https://ahadith-api.herokuapp.com/api/search/ahadith/${value}/ar-notashkeel`)
    .then(response => response.json())
    .then(data => { 
      startTransition(() => {
        setData(data) 
      })
    })
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
