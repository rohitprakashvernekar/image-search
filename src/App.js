import { useState, useEffect } from "react";
import "./App.css";
import { LoadImages, SearchImages } from "./components/api";
import Image from "./components/image";

function App() {
  const [query, setQuery] = useState();
  const [searchQ, setSearchQ] = useState()
  const data = LoadImages();

  const search = () => {
    setSearchQ(query)
  };
  const searchData = SearchImages(searchQ);
  console.log(SearchImages(searchData))
  return (
    <div className="App">
      <div>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={search}>Search</button>
      </div>
      <div className='contain'>
      { searchQ ? searchData.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        )) :
        data.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
