import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5050";

function App() {
  const [input, setInput] = useState("");
  const [images, setImages] = useState([]);

  const searchSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/new-image?query=${input}`)
      .then((response) => response.json())
      .then(
        (data) => setImages([{ ...data, title: input }, ...images]),
        localStorage.setItem("image", data)
      )
      .catch((error) => console.log(error));
    setInput("");
  };

  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header name="Images Gallery" />
      <Search input={input} setInput={setInput} handleSubmit={searchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard key={i} image={image} deleteImage={handleDelete} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

export default App;
