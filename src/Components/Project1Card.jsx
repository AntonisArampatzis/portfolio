import '../Styles/Project1Card.css';
import Card from 'react-bootstrap/Card';

export default function Project1Card() {
    return (
        <Card className="card">
            <Card.Img src="/project1img.png" alt="proj1" className='card-img img-fluid ' />
            <div className="card-description">
                <Card.Body>
                    <Card.Text className="card-text">
                        <div style={{ color: "brown", fontSize: "20px", fontWeight: 600 }}>Matchy-Matchy!</div>
                        A simple game based on the classic Matching Pairs game, improved with scoring and turn counter.
                    </Card.Text>
                </Card.Body>
                <a href="https://github.com/AntonisArampatzis/Matchy-Matchy-" target="_blank" rel="noopener noreferrer">
                    <div className="github-icon">
                        <img src="/github-icon.png" alt="gh-icon" />
                    </div>
                </a>
            </div>
        </Card>
    );
}
