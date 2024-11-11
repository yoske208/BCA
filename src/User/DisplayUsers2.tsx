import React, { useContext } from 'react'
import UseProvaider from './Provaiders/UseProvaider'
import { Link, NavLink } from 'react-router-dom';
import PageHeader from '../Pages/PageHeader';
import Users from './Users';


const DisplayUsers2 = () => {
    const {userss} = useContext(UserProvaider())
  return (
    <>
    <UseProvaider >
    <PageHeader title="user page" subTitle="list of users"/>
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
      </UseProvaider>
    </>
  )
}

export default DisplayUsers2