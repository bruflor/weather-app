import { Card, Col } from "react-bootstrap";
import "./styles.scss";

interface StatusCardProps {
  title: string;
  metric: string;
  unit: string;
}
export const StatusCard = ({ title, metric, unit }: StatusCardProps) => {
  return (
    <Col>
      <Card className=" bg-primary p-3 align-items-center ">
        <Card.Text className="text-secondary">{title}</Card.Text>
        <Card.Title>
          <span className="fs-1 fw-bold">{metric}</span> {unit}
        </Card.Title>
      </Card>
    </Col>
  );
};
