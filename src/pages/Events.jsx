import { Container, ListGroup } from "react-bootstrap";

function Events() {
  const events = [
    { id: 1, name: "Cultural Festival", date: "25th Sept" },
    { id: 2, name: "Organic Fair", date: "1st Oct" },
    { id: 3, name: "Craft Exhibition", date: "10th Oct" },
  ];

  return (
    <Container>
      <h1 className="mb-3 text-warning">Upcoming Events</h1>
      <ListGroup>
        {events.map((event) => (
          <ListGroup.Item key={event.id}>
            <strong>{event.name}</strong> – {event.date}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Events;
