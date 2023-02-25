import React, { useState } from "react"



export const ToDo =() =>{
    const [todo,setTodo] =useState([])
    const [copytodo,setCopyTodo] =useState([])
    const [text,setText] =useState("")
    const handleAdd =() =>{
        if(!text.trim())return
        setTodo ([...todo,text])
        setCopyTodo ([...todo,text])
        setText("")
    }
    const handleDelete =(item,id) =>{
        const deleteTask= todo.filter((item,index)=>index!==id)
        setTodo(deleteTask)
    }
    const handleSearch =(value)=>{
        const searchItem= copytodo.filter((item)=>
        item.toUpperCase().includes(value.toUpperCase()))
        setTodo (searchItem)

    }

    return (
        <div className="id">
            <h1>ToDolist</h1>
            <input type="text" placeholder="search..." onChange={(e)=>handleSearch(e.target.value)}/>
            <input type="text" placeholder="AddTask..."value={text}
            onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>handleAdd()}>Add</button>
            <ol>
                {todo.map((item,index)=>{
                    return(
                        <li key={index}>{item}
                        <button onClick={()=>handleDelete(item,index)}>Delete</button>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}