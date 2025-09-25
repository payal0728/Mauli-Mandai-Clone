import { Container, Button } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <div className="text-center my-5">
        <h1 className="display-4 text-primary fw-bold">Welcome to Mauli Mandai</h1>
        <p className="lead mt-3">
          Discover fresh, local, and traditional products at Mauli Mandai. 
          Explore our events and shop the best of local culture.
        </p>
        <Button variant="warning" size="lg">Shop Now</Button>
      </div>
    </Container>
  );
}

export default Home;
