import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";

const key = process.env.REACT_APP_KEY;

function App() {
  const [input, setInput] = useState("");
  const [images, setImages] = useState([]);

  const searchSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${input}&client_id=${key}`
    )
      .then((response) => response.json())
      .then((data) => setImages([{ ...data, title: input }, ...images]))
      .catch((error) => console.log(error));
    setInput("");
  };

  return (
    <div>
      <Header name="Images Gallery" />
      <Search input={input} setInput={setInput} handleSubmit={searchSubmit} />
      {!!images.length && <ImageCard image={images[0]} />}
    </div>
  );
}

export default App;
