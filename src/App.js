import React, { useState, useEffect, useTransition } from "react"
import InputBox from "./components/InputBox";
import Results from "./components/Results";

function App() {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])
	const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
			fetch(
				`https://ahadith-api.herokuapp.com/api/search/ahadith/${value}/ar-notashkeel`
			)
				.then((response) => response.json())
				.then((data) => {
					setData(data);
				});
		});
  }, [value])

  function handleSearch(e) {
    setValue(e);
    document.title = `البحث عن "${value}" في كتاب رياض الصالحين`
  }


  return (
    <div>
      <InputBox value={value} setValue={(e) => handleSearch(e)}/>
      <Results data={data.Chapter} />
    </div>
  );
}

export default App;
