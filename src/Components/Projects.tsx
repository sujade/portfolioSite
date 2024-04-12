import {Container, Row} from "react-bootstrap";
import CustomCard from "./CustomCard.tsx";
import GrowthNotes from "../images/pic01.png";
import thinkBig from "../images/pic02.png";
import Driftify from "../images/pic03.png";
import Codedex from "../images/pic04.png";

const Projects = () => {
    return (
        <Container
            className="py-5 py-md-0 text-center mt-5">
            <Row><h2 className="mt-3">My Projects:</h2>
                <p>Here, you can see some projects that <br className="d-inline d-md-none"/> I've made or took part in.
                </p></Row>
                        <Row className={"projects justify-content-between"}>
                            <CustomCard
                                title="Codédex Personality Test"
                                text="A personality test that boasts a calming design and quality documentation along with fun value."
                                image={Codedex}
                                demoUrl="https://codedex-quiz.vercel.app/"
                                repoUrl={"https://github.com/sujade/codedex-quiz"}
                            />
                            <CustomCard
                                title="GrowthNotes"
                                text="Therapy-specific note-taking application that encourages to user for personal growth and personal care."
                                image={GrowthNotes}
                                demoUrl="https://growth-notes.netlify.app/"
                                repoUrl="https://github.com/sujade/growthnotes"
                            />

                            <CustomCard
                                title="thinkBig"
                                text="thinkBig is a project that collaborates with a learning platform to enable learners to interact better."
                                image={thinkBig}
                                demoUrl="https://thinkbigproject.netlify.app/"
                                repoUrl="https://github.com/thinkbig-project/thinkbig"
                            />
                            <CustomCard
                                title="Driftify.se"
                                text="A website revamp project for the IT Company Driftfiy. The revamp was completely front-end based and design-heavy."
                                image={Driftify}
                                demoUrl="https://driftify.se"
                            />
                        </Row>

            <Row className="text-center mt-3 pb-3 fs-5"><a href="https://github.com/sujade">Click to see more!</a>
            </Row>
        </Container>
    );
};

export default Projects;