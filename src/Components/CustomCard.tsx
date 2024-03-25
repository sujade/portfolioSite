import { Card } from 'react-bootstrap';

interface CardProps {
    title: string;
    text: string;
    image: string;
}

const CustomCard = ({ title, text, image }: CardProps) => {
    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="mt-3" variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CustomCard;
