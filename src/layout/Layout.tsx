import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Main from "./Main/Main"

const Layout = () => {
  return (
    <div>
    <Header/>
    <Main Fname=" yosef chaim" Lname=" madmon" UserName=" yoske " age={25} />
    <Footer/>
      
    </div>
  )
}

export default Layout
