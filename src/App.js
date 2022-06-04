import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const url = "https://api.quotable.io/random";
function App() {
  const [quotes, setQuotes] = useState([]);
  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const { content, author } = quotes;
  return (
    // <div>
    //   <p>{content}</p>
    //   <h4>{author}</h4>
    //   <button onClick={getNewQuote}>New Quote</button>
    // </div>
    <Container fluid="md">
       <Row>
          <Col>
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    {content}
                    {' '}
                  </p>
                  <footer className="blockquote-footer">
                    {author}
                  </footer>
                </blockquote>
                <Button onClick={getNewQuote}>New Quote</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  );
}

export default App;
