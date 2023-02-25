import React,{useState, useRef, useEffect} from 'react'

export const UserefPrac=()=> {
    // const [data,setData] =useState("")
    const [listdata,setListData] =useState([])
    const dataRef=useRef ('')
    const handleAdd=()=>{
        if(!dataRef.current.value. trim()) return
        setListData([...listdata,dataRef.current.value])
        dataRef.current.value =""
        dataRef.current.focus()
    }
        useEffect(()=>{
            dataRef.current.focus()
        },[])
  return (
    <div>
        {/* <input type="text" value ={data}onChange={(e)=>setData(e.target.value)} /> */}
        <input type="text" ref={dataRef}/>
        <button onClick={()=>handleAdd()}>ADD</button>
        <ul>
            {listdata.map((item,index)=>{
                return (
                    <li key={index}>
                        {item}
                    </li>
                )
            })}
        </ul>
        

     </div>
  )
}
