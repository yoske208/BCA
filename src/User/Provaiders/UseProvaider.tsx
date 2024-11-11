import React, { Children, useState,ReactNode } from 'react'

interface User {
    username : string
    age : number
    email : string
    img : string
}

interface Props {
    children:ReactNode

}

const UsersProvaider = React.createContext<User[] | null>(null)

const UserProvaider = ({children}:Props) => {
    const [users, setusers] = useState<User[]>([])
  return (
    <UsersProvaider.Provider value={users}>
        {children}

    </UsersProvaider.Provider>
  )
}

export default UserProvaider