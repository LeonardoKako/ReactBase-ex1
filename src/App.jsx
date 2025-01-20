import "./App.css";
import CarDetails from "./Components/CarDetails";

import Challenge from "./Components/Challenge";
import ConditionalRender from "./Components/ConditionalRender";
import ListRender from "./Components/ListRender";
import ShowUserName from "./Components/ShowUserName";
import UserDetails from "./Components/UserDetails";

function App() {
  const people = [
    { name: "Leonardo", age: 19, job: "Junior Front-end Developer" },
    { name: "Nicolas", age: 25, job: "Açougueiro" },
    { name: "Gabriel", age: 17, job: "Jogador de Futebol Profissional" },
  ];

  return (
    <div className="container">
      <Challenge />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Leonardo" />
      <CarDetails brand="VM" km={1000} color="White" />
      {people.map((person) => (
        <UserDetails
          name={person.name}
          age={person.age}
          job={person.job}
          key={person.name}
        />
      ))}
    </div>
  );
}

export default App;
