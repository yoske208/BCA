import { useState } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Brether from "./Main/brether"
import Main from "./Main/Main"

const Layout = () => {
  const [name, setname] = useState("Nimrod")

  

  return (
    <div>
    <Header/>
    <Brether name={name }/>
    <Main  changeName={setname} name={name} />
    <Footer/>
      
    </div>
  )
}

export default Layout
