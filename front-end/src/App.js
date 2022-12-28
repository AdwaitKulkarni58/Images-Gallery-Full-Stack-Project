import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const key = process.env.REACT_APP_KEY;

function App() {
  const [input, setInput] = useState("");

  const searchSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${input}&client_id=${key}`
    )
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header name="Images Gallery" />
      <Search input={input} setInput={setInput} handleSubmit={searchSubmit} />
    </div>
  );
}

export default App;
