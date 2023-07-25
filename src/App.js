import "./App.css";
import React, { useState } from "react";
import Card from "./component/Card";
import axios from "axios";

function App() {
  const [search, setSearch] = useState(null);
  const [bookData, setBookData] = useState([]);

  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          " https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyChfO8N88rZ9fOqQY9QQFwu_Zlwkmb4Mek&maxResults=40"
        )
        .then((res) => setBookData(res.data.items))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="App">
      <div className="Header">
        <h1> 📚 Google Books API Search 📚</h1>
        <input
          type="text"
          placeholder="Enter You Book Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchBook}
        />
        <input type="submit" value="Submit" />
      </div>
      <div className="CardContainer">
        <Card book={bookData} />
      </div>
    </div>
  );
}

export default App;
