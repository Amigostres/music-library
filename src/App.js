import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for musica!!!");
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} musiczz`;
      const response = await fetch(`https://itunes.apple.com/search?term=${search}`);
      const resData = await response.json();
      if (resData.results.length) {
        setData(resData.results);
      } else {
        setData([]);
        setMessage("nothing was found for that artist");
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;
