import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import NewUser from "./NewUser";
import DisplayUsers from "./DisplayUsers";
import BestUser from "./BestUser";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Card from "./Card";
import EditUser from "./EditUser";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import DisplayUsers2 from "./DisplayUsers2";

interface User {
  id?: string;
  userName: string;
  email: string;
  age: number;
  img: string;
}

const Users = () => {
  const [Users, setUsers] = useState<User[]>([]);
  const [userStars, setUserStars] = useState<User[]>([]);
  const [user, setuser] = useState<User>();

  useEffect(() => {
    fetch("/Data.json")
      .then((respons) => respons.json())
      .then((data) => setUsers(data));
  }, []);

  const getStars = (starUser: User) => {
    setUserStars([...userStars, starUser]);
  };

  const addNewUser = (newUser: User) => {
    newUser.id = v4();
    setUsers([...Users, newUser]);
  };

  const DeleteUser = (id: string) => {
    setUsers(Users.filter((user) => user.id !== id));
  };
  const UpdateUser = (updateUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updateUser.id ? { ...user, ...updateUser } : user
      )
    );
  };

  const updateSetUser = (user: User) => {
    setuser(user);
  };

  return (
    <div>
      <Routes>
        <Route path="/LOGIN" element={<Login />} />
        <Route path="/HOME" element={<Home />} />
        <Route path="/ABOUT" element={<About />} />
        <Route path="/Card" element={<Card />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/edit" element={<EditUser />} /> */}

        <Route path="/add" element={<NewUser addUser={addNewUser} />} />
        <Route
          path="/edit/:id"
          element={<EditUser user={user!} editUser={UpdateUser} />}
        />
        <Route path="/" element={<DisplayUsers2/>}/>

        {/* <Route
          path="/"
          element={
            <DisplayUsers
              users={Users}
              addStart={getStars}
              deleteUser={DeleteUser}
              updateUser={updateSetUser}
            />
          }
        /> */}

        <Route>
          {userStars.length > 0 && <BestUser userStars={userStars} />}
        </Route>
      </Routes>
    </div>
  );
};

export default Users;
