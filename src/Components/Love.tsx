import {FaHeart} from "react-icons/fa";
import {Container, Row} from "react-bootstrap";

const Love = () => {
    return (
        <Container className="text-center mt-5 mb-3">
           <Row><p>Made with lots of <FaHeart/> by Su Jade.</p></Row>
            <Row><a href="https://github.com/sujade/portfolioSite">Source Code</a></Row>
        </Container>
    );
};

export default Love;