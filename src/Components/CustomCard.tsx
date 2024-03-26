import { Card } from 'react-bootstrap';

interface CardProps {
    title: string;
    text: string;
    image: string;
    demoUrl: string;
    repoUrl?: string;
}

const CustomCard = ({ title, text, image, demoUrl, repoUrl }: CardProps) => {
    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="mt-3" variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Card.Text className="row">
                    <a className="col-12 btn btn-outline-light mb-3" href={demoUrl}>Demo</a>
                    { repoUrl && <a className="col-12 btn btn-outline-light" href={repoUrl}>Repository</a> }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CustomCard;
