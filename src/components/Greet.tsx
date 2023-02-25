type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h1>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages`
          : `Is Not LoggedIn`}
      </h1>
    </div>
  );
};
