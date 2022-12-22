import React, { useEffect, useState } from 'react';

function AddStudent(props) {
 const [students,setstudents] = useState(['Veera','Venkata','Ravi','Kiran'])
 const [newstudent,setnewstudent] = useState("")

 function newstud(e){
  setnewstudent(e.target.value)
}
 function addstudent(){
  setstudents([...students,newstudent])
 }

 function deletestudent(i){
  var temp = [...students]
  temp.splice(i,1)
  setstudents([...temp])
 }


  return (
    <div>
      <input type="text" name="" id="" onChange={newstud}  />
      
        <button onClick={addstudent}>Add Student</button>

    
      {
        students.map(function(s,i){
          return <li>{s} <button onClick={()=>{deletestudent(i)}}>Delete</button></li> 
        })
      }
      
    </div>
  );
}

export default AddStudent;