interface SunName {
    name : string
}


const Brether = (prop : SunName) => {


  return (
    <div>
      <button onClick={() => prop.name}/>
        {prop.name}
    </div>
  )
}

export default Brether
