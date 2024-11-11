import React, {  useState,ReactNode, useEffect } from 'react'

interface User {
    id? : string
    username : string
    age : number
    email : string
    img : string
}

interface Props {
    children:ReactNode

}

export const UsersProvaider = React.createContext<User[] | null>(null)

const UserProvaider = ({children}:Props) => {
    const [users, setusers] = useState<User[]>([])

    useEffect(() => {
      fetch("/Data.json")
        .then((respons) => respons.json())
        .then((data) => setusers(data))
        .catch((error) => console.error("Error fatch",error))
    }, []);

  return (
    <UsersProvaider.Provider value={users}>
        {children}

    </UsersProvaider.Provider>
  )
}

export default UserProvaider