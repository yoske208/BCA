import React, { useContext } from 'react'
import UseProvaider, { UsersProvaider } from '../Provaiders/UseProvaider'
import { Link, NavLink } from 'react-router-dom';
import PageHeader from '../Pages/PageHeader';
import Users from './Users';
import UserProvaider from '../Provaiders/UseProvaider';

interface User { 
    id? : string
    username : string
    age : number
    email : string
    img : string

}


const DisplayUsers2 = () => {
    const users = useContext(UsersProvaider)
  return (
    <>
    <PageHeader title="user page" subTitle="list of users"/>
      <div className="card-list">
        {users?.map((user) => (
          <div key={user.id} className="card">
            <img
              src={user.img}
              alt={`${user.username}'s avatar`}
              style={{ width: "100px", height: "100px" }}
            />

            <h3>{user.username}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <button
            //   onClick={() => {
            //     updateUser(user);
            //   }}
            >
              <NavLink to={`/users/edit/${user.id}`}>Edit</NavLink>
            </button>
            {/* <button onClick={() => deleteUser(user.id!)}>Delete</button> */}
            {/* <button onClick={() => setFlag(true)}>Edit</button> */}
            {/* <button onClick={() => addStart(user)}>Add to stars</button> */}

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
  )
}

export default DisplayUsers2