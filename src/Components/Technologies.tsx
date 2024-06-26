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
import { FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";


const Technologies = () => {
    return (
        <Container className="text-center">
            <Row className="mb-3"><h2>Technologies:</h2></Row>
            <Row className="d-flex">
                <Col className="icon"><FaHtml5 size={50} /> <br/> HTML </Col>
                <Col className="icon"><FaCss3Alt size={50} /> <br/> CSS </Col>
                <Col className="icon"><FaSass size={50} /> <br/> SASS </Col>
                <Col className="icon"><FaBootstrap size={50} /> <br/> Bootstrap </Col>
                <Col className="icon"><SiTailwindcss size={50} /> <br/> Tailwind </Col>
                <Col className="icon"><SiJavascript size={50} /> <br/> JavaScript </Col>
                <Col className="icon"><FaReact size={50} /> <br/> React </Col>
                <Col className="icon"><SiNextdotjs size={50} /> <br/> Next.js </Col>
                <Col className="icon"><BiLogoTypescript size={50} /> <br/> TypeScript </Col>
                <Col className="icon"><FaNodeJs size={50} /> <br/> Node.js </Col>
                <Col className="icon"><DiMongodb size={50} /> <br/> MongoDB </Col>
            </Row>

        </Container>
    );
};

export default Technologies;