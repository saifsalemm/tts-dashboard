import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LOGO from "../logo.svg";

const TtsNavbar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary mb-5 shadow">
        <Container>
          <Navbar.Brand href="#home">
            <i className="bi bi-gear-fill"></i>
            <span className="h3 fw-bold mx-2">لوحة التحكم</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default TtsNavbar;
