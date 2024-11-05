import "./Main.css"

interface PropsInterface { 
  id ? : string
  Fname : string
  Lname : string
  UserName : string
  age ? : number

}

const Main = (props:PropsInterface) => {
  return (
    <>
    <div className="position" style={{minHeight: "91vh"}}>
      <h2>{props.id}</h2>
      <h2>{props.Fname}</h2>
      <h2>{props.Lname}</h2>
      <h2>{props.UserName}</h2>
      <h2>{props.age}</h2>
      
   


        
    </div>
    </>
  )
}

export default Main
