import React , { useState } from 'react'
import { addTodo , done , undone } from './redux/action'
import { useDispatch } from 'react-redux'


function Todoinput({setFilter}) {
    const [name , setName] = useState()
    
   const disptach = useDispatch()

    return (
        <div className="inputt">
            <div>
            <button onClick={()=>setFilter("undone")}> undone</button>
            <button onClick={()=>setFilter("done")}> done</button>
            <button onClick={()=>setFilter("all")}>all</button>
            </div>
            {console.log(name)}
            <input onChange={(e)=>setName(e.target.value)}  value = {name} type="text" />
           <div>
            <button  
            onClick={()=>disptach(addTodo({
                id : Math.random, 
                name : name,
                complete : false
                
            } ,setName(" ")
            ))}
            > add</button>
            </div>
        </div>
    )
}

export default Todoinput
