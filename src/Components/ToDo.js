import React, { useState } from 'react'
import './ToDo.css';
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
    const [todo , setToDo]=useState("");
    const [getlist,setGetList]=useState([])

    function handleAdd ()  {  
           
           setGetList([{id :uuidv4() ,todo : todo ,completed :false },
            ...getlist
            
        ]);
          setToDo("")
    }
     function handleDelete (e){   
      let id = e.target.name;
      let index = getlist.findIndex(item => {
        return item.id===id;
       })
       getlist.splice(index,1)
       setGetList([...getlist])
     }
      //handle edit//
     function handleEdit (e) {
     let id =e.target.name;
     console.log("id"+id)
     let index = getlist.findIndex(item => {
      return item.id ===id;
     })
     
     let todoitem=getlist[index];
     getlist.splice(index,1)
     setToDo(todoitem.todo)
     }
      
     //handle check//
     function handleCheck (e){ 
       let id= e.target.name;
       let index= getlist.findIndex(item => {
        return item.id===id;
       })
       getlist[index].completed = getlist[index].completed ? false : true;
       setGetList([...getlist])
      }

  return (
    <div className='addtask'> 
        <input className='input' type='text' value={todo} onChange={(e)=>setToDo(e.target.value)} placeholder='enter your task'/>
         
         <button className='button' disabled={todo.length<1} style={{backgroundColor: todo.length<1 ? "gray":"" }}   type='submit' value={getlist} onClick={handleAdd}>Add Task</button>
        <div className='addtodo'>
        <h3>To Do List:</h3>
        <div className='todos' >
       {getlist.length===0 && <div>Add To do to display</div>}
            {getlist.map(x=> (
             <div className='tasklist' key={x.id}> 
      <input type='checkbox' name={x.id} onClick={handleCheck} value={x.completed}
        className='check'  id=''/>
           <div className='todoname' style={{textDecoration :x.completed?'line-through' :''}}>{x.todo} </div>
            <div className='buttoncontainer'>
             <button className='button3' name={x.id} onClick={handleEdit}>edit</button>
             <button className='button2' name={x.id} onClick={handleDelete}>Delete</button>
              </div>
             </div>))}
            </div>
    </div>
            
    </div>
   
  )
            }

export default ToDo