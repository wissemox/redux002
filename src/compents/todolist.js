import React from 'react'
import Todoitem from './Todoitem'
import { useSelector } from 'react-redux'
function Todolist({filter}) {
    let todos = useSelector(state => state)
    let result=[]
    if(filter==="all"){
        result=todos
    } else if(filter==="done"){
        result=todos.filter((el)=>el.complete===true)
    } else if(filter==="undone") { 
        result=todos.filter((el)=>el.complete===false)
    }
    return (
        <div> 
           {console.log(todos)}
        {result.map(el=>{ 
            return <Todoitem key={todos.id} el={el}/>
        })}
           
        </div>
    )
}
export default Todolist
