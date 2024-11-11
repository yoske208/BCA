import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
interface User {
  id?: string;
  userName: string;
  email: string;
  age: number;
  img: string;
}
interface Props {
  editUser: (user: User) => void;
  user: User;
}
export default function EditUser({ editUser, user }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userName, setusername] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState(0);
  const [img, setimg] = useState("");

  useEffect(() => {
    setusername(user.userName);
    setemail(user.email);
    setage(user.age);
    setimg(user.img);
    console.log(userName);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editUser({
      id,
      userName,
      email,
      age,
      img,
    });
    navigate("/users");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setusername(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setage(e.target.valueAsNumber)}
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="text"
            value={img}
            onChange={(e) => setimg(e.target.value)}
          />
          {/* <button onClick={() => editUser(user)}>saving</button> */}
          <button type="submit">Save!!</button>
        </form>

      </div>

      {/* <input
        type="text"
        value={user.userName}
        onChange={(e) => setusername(e.target.value)}/>

      <input
        type="text"
        value={user.email}
        onChange={(e) => setusername(e.target.value)}/>

      <input
        type="text"
        value={user.age}
        onChange={(e) => setusername(e.target.value)}/>

      <input
        type="text"
        value={user.img}
        onChange={(e) => setusername(e.target.value)}/>
       */}

      {/* <button onClick={() => editUser({ ...user, userName })}>
       
        Save
      </button> */}
    </>
  );
}
