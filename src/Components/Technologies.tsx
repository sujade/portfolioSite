import {Col, Container, Row} from "react-bootstrap";

//Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

const Technologies = () => {
    return (
        <Container className="mt-5 text-center">
            <Row className="mb-3"><h2>Technologies:</h2></Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col className="tech-buttons"><FaHtml5 size={50} /> <br/> HTML </Col>
                <Col className="tech-buttons"><FaCss3Alt size={50} /> <br/> CSS </Col>
                <Col className="tech-buttons"><FaBootstrap size={50} /> <br/> Bootstrap </Col>
                <Col className="tech-buttons"><SiTailwindcss size={50} /> <br/> Tailwind </Col>
                <Col className="tech-buttons"><SiJavascript size={50} /> <br/> JavaScript </Col>
                <Col className="tech-buttons"><FaReact size={50} /> <br/> React </Col>
                <Col className="tech-buttons"><BiLogoTypescript size={50} /> <br/> TypeScript </Col>
                <Col className="tech-buttons"><FaNodeJs size={50} /> <br/> Node.js </Col>
                <Col className="tech-buttons"><DiMongodb size={50} /> <br/> MongoDB </Col>
                <Col className="tech-buttons"></Col>
                <Col className="tech-buttons"></Col>
            </Row>

        </Container>
    );
};

export default Technologies;