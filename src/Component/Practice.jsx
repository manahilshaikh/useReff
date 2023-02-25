// import React,{useEffect, useState,useRef} from "react";



// export const Practice=()=>{
//     const [listdata,setListData]=useState([])
//     const dataRef=useRef("")

//     const handleAdd=()=>{
//         if(!dataRef.current.value.trim()) return
//         setListData([...listdata,dataRef.current.value])
//         dataRef.current.value=('')
//         dataRef.current.focus()
//     }
//     useEffect(()=>{
//           dataRef.current.focus()
//     },[])
//     return (
//         <div>
//             <h1>List</h1>
//             <input type="text" ref={dataRef} />
//             <button onClick={handleAdd}>Add</button>
        
//                 {listdata.map((item,index)=>{
//                     return (
//                         <li key={index}>{item}</li>
//                     )

//                 })}
        

//         </div>
//     )
// }
import React,{useState,useRef,useEffect} from 'react'


export const Practice=()=>{
    const [listdata,setListdata]=useState([])
    const dataRef=useRef("")
    const handleAdd=()=>{
        if(!dataRef.current.value.trim())return
        setListdata 
        ([...listdata,dataRef.current.value])
        dataRef.current.value=("")
        dataRef.current.focus()
    }
    useEffect(()=>{
        dataRef.current.focus()
    })
    return (
        <div>
            <input type="text" ref={dataRef}/>
            <button onClick={handleAdd}>Add</button>
            {listdata.map((item,index)=>{
                return(
                    <h1 key={index}>{item}</h1>
                )
            })}
        </div>
    )
}