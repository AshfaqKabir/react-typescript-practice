import React, { useState } from "react";
import { CardList } from "./CardList";
import { PersonForm } from "./PersonForm";
import { Col, Spacer } from "@nextui-org/react";
import { PersonCard } from "./Card";

export interface InitialState {
  people: {
    id: number;
    name: string;
    age: number;
    url: string;
    desc?: string;
  }[];
}

export const PersonApp = () => {
  const [people, setPeople] = useState<InitialState["people"]>([
    {
      id: 0,
      name: "Babar",
      age: 30,
      url: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      desc: "this is a descriton abt Babar",
    },
    {
      id: 1,
      name: "Azam",
      age: 32,
      url: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      desc: "this is a descriton abt Azam",
    },
    {
      id: 3,
      name: "King Azam",
      age: 39,
      url: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      desc: "this is a descriton abt King Azam",
    },
  ]);
  return (
    <div>
      <CardList>
        {people.map((ppl) => {
          return (
            <Col key={ppl.id}>
              <PersonCard
                name={ppl.name}
                age={ppl.age}
                url={ppl.url}
                desc={ppl.desc}
              />
            </Col>
          );
        })}
      </CardList>
      <Spacer y={3} />
      <PersonForm people={people} setPeople={setPeople} />
    </div>
  );
};
