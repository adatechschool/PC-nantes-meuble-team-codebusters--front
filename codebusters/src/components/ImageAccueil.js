import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/photoAccueil.jpg";
import image2 from "../assets/photoAccueil2.jpg";
import image3 from "../assets/photoAccueil3.jpg";

const textStyle = {
  color: "white",
  textTransform: "uppercase",
  fontSize: "5em",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "2px 2px 4px #000000",
};

const divStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "10em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// const carousel = {
//   marginBottom: "15em",
// };

function ImageAcceuil() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        {/* <Carousel.Caption style={carousel}></Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        {/* <Carousel.Caption style={carousel}></Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        {/* <Carousel.Caption style={carousel}></Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageAcceuil;
