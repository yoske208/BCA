import React, { useState } from 'react'

interface User {
    id?: string;
    userName: string;
    email: string;
    age: number;
    img: string;
}

interface Props {
    userStars : User[]
}

const BestUser = ({userStars}:Props) => {
    console.log(userStars);
    
  return (
    <div className='card-list'>
        <h1>My Stars</h1>
        {userStars.map(user => (
            <div key={user.id} className='card'>
                <h3>user name is : {user.userName}</h3>
                <p>the email is :{user.email}</p>
                <p>the age is :{user.age}</p>
                <img
                src='aaa'
                />
                
                
            </div>
        ))}
        
    </div>
  )
}

export default BestUser