type PersonType = {
  id: number;
  name: {
    first: string;
    last: string;
  };
};

export const Person = ({ id, name }: PersonType) => {
  return (
    <div>
      <h1>
        {name.first} {name.last}
      </h1>
    </div>
  );
};
