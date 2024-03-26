import {Col, Container, Row} from "react-bootstrap";
import {FaLinkedin} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
        return (
            <Container className="text-center mt-5">
                <Row><h2>Interested? Let's Connect!</h2></Row>
                <Row className="mt-3">
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col className="icon">
                        <a href="https://www.linkedin.com/in/sujade/"><FaLinkedin size={50}/><br/> LinkedIn</a>
                    </Col>
                    <Col className="icon">
                        <a href="mailto:dnmzsu@gmail.com"><MdOutlineEmail size={50}/><br/> Email</a>
                    </Col>
                    <Col className="icon">
                        <a href="https://github.com/sujade/"><FaGithub size={50}/><br/> GitHub</a>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        )
            ;
    }
;

export default Footer;