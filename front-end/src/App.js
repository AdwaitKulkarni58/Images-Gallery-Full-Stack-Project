import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

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
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard key={i} image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
