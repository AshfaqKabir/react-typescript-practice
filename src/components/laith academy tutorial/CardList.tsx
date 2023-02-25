import { Container, Row } from "@nextui-org/react";

interface IProps {
  children: JSX.Element[];
}

export const CardList: React.FC<IProps> = ({ children }) => {
  return (
    <Container alignItems="center" responsive>
      <Row gap={1}>{children}</Row>
    </Container>
  );
};
