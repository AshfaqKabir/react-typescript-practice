import { Card, Grid, Text } from "@nextui-org/react";

// TypeScript
interface InitialProps {
  name: string;
  age: number;
  url: string;
  desc?: string;
}

export const PersonCard: React.FC<InitialProps> = ({
  name,
  age,
  url,
  desc,
}) => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img alt="nextui logo" src={url} width="34px" height="34px" />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{age}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Make beautiful websites regardless of your design experience.
        </Text>
      </Card.Body>
      <Card.Footer>{desc}</Card.Footer>
    </Card>
  );
};
