import React from 'react'
import { NavLink } from 'react-router-dom'
interface Props{
    to:string
    InnerText:string
}

const Link_nav_bar = (props:Props) => {
  return (
    <>
    <NavLink  to={props.to}>{props.InnerText}</NavLink>
      
    </>
  )
}

export default Link_nav_bar
