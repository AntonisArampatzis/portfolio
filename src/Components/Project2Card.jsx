import '../Styles/Project1Card.css';
import Card from 'react-bootstrap/Card';

export default function Project2Card() {
    return (
        <Card className="card">
            <div className="card-img">
                <Card.Img src="src/assets/project2img.png" alt="proj2" />
            </div>
            <div className="card-description">
                <Card.Body>
                    <Card.Text className='card-text'>
                        <div style={{ color: "brown", fontSize: "20px", fontWeight: 600 }}>CLOTHING INC</div>
                        A project still in progress about a simple clothing website
                    </Card.Text>
                </Card.Body>

                <div className='github-icon'><img src="/src/assets/github-icon.png" alt="gh-icon" /></div>
            </div>
        </Card>
    )
}