import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Spacer,
  Textarea,
  Button,
} from "@nextui-org/react";

import { InitialState as IProps } from "./PersonApp";

interface InitialState {
  person: {
    id: number;
    name: string;
    age: number;
    url: string;
    desc?: string;
  };
}

interface InitialProps {
  people: InitialState["person"][];
  setPeople: React.Dispatch<React.SetStateAction<IProps["people"]>>;
}

export const PersonForm: React.FC<InitialProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState<InitialState["person"]>({
    id: 2,
    name: "name",
    age: 1,
    url: "https://something.com",
    desc: "this is a desc",
  });

  // Fucnitons
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // if (e.target.name === "name") {
    //   setInput({ ...input, name: e.target.value });
    // } else if (e.target.name === "age") {
    //   setInput({ ...input, age: +e.target.value });
    // } else if (e.target.name === "url") {
    //   setInput({ ...input, url: e.target.value });
    // } else if (e.target.name === "desc") {
    //   setInput({ ...input, desc: e.target.value });
    // }

    // Shortcut Way Of Above Technique
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    console.log(input);
  };

  const handleSubmit = (): void => {
    if (!input.name || !input.age || !input.url || !input.desc) return;

    setPeople([
      ...people,
      {
        id: new Date().valueOf(),
        name: input.name,
        age: input.age,
        url: input.url,
        desc: input.desc,
      },
    ]);

    setInput({
      id: 0,
      name: "",
      age: 0,
      url: "",
      desc: "",
    });
  };

  return (
    <Container alignItems="center" responsive>
      <ul>
        <li>{input.name}</li>
        <li>{input.age}</li>
        <li>{input.url}</li>
        <li>{input.desc}</li>
      </ul>
      <Spacer y={1.5} />
      <Row>
        <Col>
          <Input
            clearable
            underlined
            name="name"
            labelPlaceholder="Name"
            onChange={(e) => {
              handleInput(e);
            }}
          />
        </Col>
      </Row>
      <Spacer y={2} />
      <Row>
        <Col>
          <Input
            clearable
            underlined
            name="age"
            labelPlaceholder="Age"
            type={"number"}
            onChange={(e) => {
              handleInput(e);
            }}
          />
        </Col>
      </Row>
      <Spacer y={2} />

      <Row>
        <Col>
          <Input
            clearable
            underlined
            name="url"
            labelPlaceholder="Image Url"
            type={"url"}
            onChange={(e) => {
              handleInput(e);
            }}
          />
        </Col>
      </Row>
      <Spacer y={0.5} />
      <Row>
        <Col>
          <Textarea
            // label="default"
            name="desc"
            status="default"
            placeholder="Describe Yourself."
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <Spacer y={0.5} />

          <Button auto onClick={handleSubmit}>
            Submit
          </Button>
          <Spacer y={0.5} />
        </Col>
      </Row>
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Container>
  );
};
