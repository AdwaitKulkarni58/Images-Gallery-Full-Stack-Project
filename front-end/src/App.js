import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [input, setInput] = useState("");

  const searchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header name="Images Gallery" />
      <Search input={input} setInput={setInput} handleSubmit={searchSubmit} />
    </div>
  );
}

export default App;
