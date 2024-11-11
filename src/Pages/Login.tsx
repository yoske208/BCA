import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from './PageHeader'
interface Props {
    userName : string
    password : string
}

const Login = () => {

  return (
    <div>
            <PageHeader title="login page" subTitle="page of login"/>

        <label id='username'>User Name</label>
        <input type="text" id='username'  />

        <label id='password'>User Name</label>
        <input type="text" id='password'  />

        <Link to={"/users"}><button type='submit'>login</button></Link>

        
    </div>
  )
}

export default Login