import LeftSide from "./LeftSide/LeftSide"
import RigthSide from "./RigthSide/RigthSide"
import "./Header.css"

const Header = () => {
    
  return (
    <div className="header">
        
        <LeftSide/>
        <h1>this is my site</h1>
        <RigthSide/>
      
    </div>
  )
}

export default Header
