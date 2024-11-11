import React, { useState } from "react";
import NewUser from "./NewUser";
import EditUser from "./EditUser";
import BestUser from "./BestUser";
import { Link, NavLink } from "react-router-dom";

interface User {
  id?: string;
  userName: string;
  email: string;
  age: number;
  img: string;
}

interface Props {
  users: User[];
  deleteUser: (id: string) => void;
  updateUser: (user: User) => void;
  addStart: (user: User) => void;
}

export default function DisplayUsers({
  users,
  deleteUser,
  updateUser,
  addStart,
}: Props) {
  // const [flag, setFlag] = useState(false);

  return (
    <>
      <div className="card-list">
        {users.map((user) => (
          <div key={user.id} className="card">
            <img
              src={user.img}
              alt={`${user.userName}'s avatar`}
              style={{ width: "100px", height: "100px" }}
            />

            <h3>{user.userName}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <button
              onClick={() => {
                updateUser(user);
              }}
            >
              <NavLink to={`/users/edit/${user.id}`}>Edit</NavLink>
            </button>
            <button onClick={() => deleteUser(user.id!)}>Delete</button>
            {/* <button onClick={() => setFlag(true)}>Edit</button> */}
            <button onClick={() => addStart(user)}>Add to stars</button>

            {/* {flag && <EditUser editUser={updateUser} user={user} />} */}
          </div>
        ))}
      </div>
      <Link to={"/users/add"}>
        <button>ADD USER</button>
      </Link>

      <Link to={"/users/login"}>
        <button>Login</button>
      </Link>
    </>
  );
}
