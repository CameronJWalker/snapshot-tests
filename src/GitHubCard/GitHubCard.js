import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Cameron Walker</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">GitHub: CameronJWalker</Card.Subtitle>
        <Card.Text>
          I am 22 years old from a small town called Beaver, Utah. I moved to Las Vegas my 
          freshman year of highschool because of my dads work.
          I finished my associates through College Of Southern Nevada and now hope to break 
          into tech through the Coding Bootcamp at UNLV
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;