import {Col, Container, Row} from "react-bootstrap";
import Photo from "../images/pic00.jpg";

const Header = () => {
    return (
        <Container className="mt-5">
            <Row className="text-center">
                <h1>Developing with creativity and drive!</h1>
            </Row>

            <Row className=" mt-5 justify-content-md-center">
                <Col></Col>
                <Col><img id="sujade" src={Photo} alt="Su Jade"/></Col>

                <Col className="mt-3">
                    <h3>Hey, I'm Su! I'm a web developer based in Germany.</h3>
                    <p>I have been mostly working as a translator before changing fields. My challenge driven and
                        learning-by-doing nature led me to software development and helped me picking up new
                        technologies and implementing them fast and effectively.</p></Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default Header;