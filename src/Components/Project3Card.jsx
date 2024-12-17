import '../Styles/Project1Card.css';
import Card from 'react-bootstrap/Card';

export default function Project3Card() {
    return (
        <Card className="card">
            <div className="card-img">
                <Card.Img src="/project3img.png" alt="proj3" />
            </div>
            <div className="card-description">
                <Card.Body>
                    <Card.Text className="card-text">
                        <div style={{ color: "brown", fontSize: "20px", fontWeight: 600 }}>Password Generator</div>
                        This is a code along project i made for practice and also for personal use
                    </Card.Text>
                </Card.Body>
                <a href="https://github.com/AntonisArampatzis/Password-Generator-Project" target="_blank" rel="noopener noreferrer">
                    <div className='github-icon'>
                        <img src="/github-icon.png" alt="gh-icon" />
                    </div>
                </a>
            </div>
        </Card>
    )
}