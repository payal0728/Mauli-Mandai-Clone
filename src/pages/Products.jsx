import { Container, Card, Row, Col } from "react-bootstrap";

function Products() {
  const products = [
    { id: 1, name: "Fresh Vegetables", desc: "Locally grown vegetables", price: "₹50/kg" },
    { id: 2, name: "Organic Fruits", desc: "Farm fresh fruits", price: "₹120/kg" },
    { id: 3, name: "Handmade Crafts", desc: "Traditional handmade items", price: "₹500" },
  ];

  return (
    <Container>
      <h1 className="mb-4 text-danger">Our Products</h1>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <p className="fw-bold">{product.price}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
