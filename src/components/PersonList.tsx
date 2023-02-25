type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};

export const PersonList = ({ name }: PersonListProps) => {
  return (
    <>
      <ul>
        {name.map((name) => {
          return (
            <li>
              <h4>
                {name.first} {" "}
                {name.last}
              </h4>
            </li>
          );
        })}
      </ul>
    </>
  );
};
