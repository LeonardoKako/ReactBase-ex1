import { useState } from "react";

const ListRender = () => {
  const [users, setUsers] = useState([
    { name: "leleo", age: 19, id: 1 },
    { name: "pepe", age: 15, id: 2 },
    { name: "serrudo", age: 24, id: 3 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((users) => randomNumber !== users.id);
    });
  };

  return (
    <div>
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete</button>
    </div>
  );
};

export default ListRender;
