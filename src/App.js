import "./App.css";
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML,CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App() {
  const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];
  const [gift, setGift] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = () => {
    console.log({
      name,
      email,
    });
  };
  const handleUpdate = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };
  const [name, setName] = useState();
  const [checked, setChecked] = useState();
  
  return (
    <div style={{ padding: 20 }}>
      {courses.map((courses) => (
        <div key={courses.id}>
          <input
            type="checkbox"
            checked={checked === courses.id}
            onchange={() => setChecked(courses.id)}
          />
          {courses.name}
        </div>
      ))}
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={handleUpdate}>Lấy thưởng</button>
      <br></br>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <button onClick={handleSubmit}> Change</button>
    </div>
  );
}
export default App;
