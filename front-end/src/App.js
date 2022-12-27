import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const searchSubmit = (event) => {
  event.preventDefault();
  console.log(event.target[0].value);
};

function App() {
  return (
    <div>
      <Header name="Images Gallery" />
      <Search handleSubmit={searchSubmit} />
    </div>
  );
}

export default App;
