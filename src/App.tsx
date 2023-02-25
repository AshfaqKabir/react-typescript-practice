import { useState } from "react";

import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Button } from "@nextui-org/react";
import { PersonCard } from "./components/laith academy tutorial/Card";
import { CardList } from "./components/laith academy tutorial/CardList";
import { PersonApp } from "./components/laith academy tutorial/PersonApp";

function App() {
  const personName = {
    id: 1,
    first: "Ashfaq",
    last: "Kabir",
  };

  const nameList = [
    {
      first: "Ashfaq",
      last: "Kabir",
    },
    {
      first: "Uzumaki",
      last: "Naruto",
    },
    {
      first: "Eren",
      last: "Yeager",
    },
  ];

  const [number, setNumber] = useState<number | string>(5);
  const changeNumber = () => {
    setNumber("true");
  };

  return (
    <div className="App">
      {/* <Greet name="Ashfaq" messageCount={10} isLoggedIn={true} />
      <Person id={personName.id} name={personName} />
      <PersonList name={nameList} /> */}
      <PersonApp />
      {/* <Button>Default</Button> */}
    </div>
  );
}

export default App;
