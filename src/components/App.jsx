import React,{useState} from "react";

function App() {
  const [fullName,setFullName]=useState({fname:"",lname:""});

  function handleChangename(event){

    const {value,name }= event.target;

    setFullName((prevValues)=>{
      if(name=== 'fName'){
        return {fname: value,
                lname:prevValues.lname
                } 
      }else if(name=== 'lName'){
        return {fname: prevValues.fname,
                lname:value
              }
      }
    });
}
 
  return (
    <div className="container">
      <h1>Hello  {fullName.fname} {fullName.lname}</h1>
      <form >
        <input onChange={handleChangename} name="fName" placeholder="First Name" value={fullName.fname} />
        <input onChange={handleChangename}name="lName" placeholder="Last Name" value={fullName.lname}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
