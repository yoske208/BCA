import "./Main.css"

interface PropsInterface { 
  changeName : (name:string)  => void
  name : string

}


const Main = (props:PropsInterface) => {
  
  return (
    <>
    <div className="position" style={{minHeight: "91vh"}}>
     
        {props.name}
      <button className="button" onClick={() => props.changeName("meny")}> change the name</button> 
       
        
        
   


        
    </div>
    </>
  )
}

export default Main
