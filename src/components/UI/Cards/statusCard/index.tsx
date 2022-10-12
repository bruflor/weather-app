import { Card, Col } from "react-bootstrap";
import "./styles.scss";

export const StatusCard = () => {
  return (
    <Col>
      <Card className=" bg-primary p-3 align-items-center ">
        <Card.Text>Wind status</Card.Text>
        <Card.Title>7mph</Card.Title>
      </Card>
    </Col>
  );
};
