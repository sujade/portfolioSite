import {Container, Row} from "react-bootstrap";
import CustomCard from "./CustomCard.tsx";
import GrowthNotes from "../images/pic01.png";
import thinkBig from "../images/pic02.png";
import Driftify from "../images/pic03.png";

const Projects = () => {
    return (
        <Container id="projects" className="text-center mt-5 shadow-sm rounded-pill border border-black border-5">
            <Row><h2 className="mt-3">My Projects:</h2>
                <p>Here, you can see some projects that I've made or took part in.</p></Row>
            <Row className="d-flex justify-content-center">
                <Row className="d-flex justify-content-center gap-5"><CustomCard
                    title="GrowthNotes"
                    text="Therapy-specific note-taking application that encourages to user for personal growth and personal care."
                    image={GrowthNotes}
                />

                <CustomCard
                    title="thinkBig"
                    text="thinkBig is a project that collaborates with a learning platform to enable learners to interact better."
                    image={thinkBig}
                />

                <CustomCard
                    title="Driftify.se"
                    text="A website revamp project for Driftfiy. The revamp was completely front-end based and design-heavy."
                    image={Driftify}
                /></Row>
            </Row>

            <Row className="text-center mt-3 pb-3 fs-5"><a href="https://github.com/sujade">Click to see more!</a> </Row>
        </Container>
    );
};

export default Projects;