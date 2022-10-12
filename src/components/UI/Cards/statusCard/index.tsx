import { Card } from "react-bootstrap";

export const StatusCard = () => {
  return (
    <Card className="bg-primary p-3 align-items-center ">
      <Card.Text>Wind status</Card.Text>
      <Card.Title>7mph</Card.Title>
    </Card>
  );
};
