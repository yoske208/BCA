import React, { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  userName: string;
  email: string;
  age: number;
  img: string;
}
interface Props {
  addUser: (newUser: User) => void;
}

const NewUser = (props: Props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.addUser({
      userName,
      email,
      age,
      img,
      
      
    });
    setUserName("");
    setEmail("");
    setImg("");
    setAge(0);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">USER NAME</label>
            <input
              id="userName"
              type="text"
              value={userName}
              placeholder="username"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-MAIL</label>
            <input
              id="email"
              type="text"
              value={email}
              placeholder="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">IMG</label>
            <input
            id="img"
              type="text"
              value={img}
              placeholder="img"
              onChange={(event) => {
                setImg(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">AGE</label>
            <input
            id="age"
              type="number"
              value={age}
              placeholder="age"
              onChange={(event) => {
                setAge(Number(event.target.value));
              }}
            />
          </div>
        </form>
        <Link to={"/users"}><button type="submit" >Add a new user</button></Link>
      </div>
    </>
  );
};

export default NewUser;
