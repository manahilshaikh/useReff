import React, { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const inputref = useRef("");
  const inputref2 = useRef("");
  // console.log(inputref)
  const handleAdd = () => {
    if (!text.trim()) return;
    setTodo([...todo, text]);
    setText("");
    inputref.current.focus();
  };
  useEffect(() => {
    inputref.current.focus();
    inputref2.current.focus();
  }, []);
  return (
    <div>
      <h1>UseRef</h1>
      <input
        type="text"
        value={text}
        placeholder="FRIST..."
        onChange={(e) => setText(e.target.value)
        }
        ref={inputref}
      />
      <input
        type="text"
        value={text1}
        placeholder="SECOND..."
        onChange={(e) => setText1(e.target.value)}
        ref={inputref2}
      />
      <button onClick={() => handleAdd()}>Add</button>
      
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
// import React, { useEffect, useRef, useState } from 'react'

// export const UseRef=() =>{
//     const [todo,setTodo]=useState([])
//     const [text1,setText1]=useState('')
//     const [text2,setText2]=useState('')
//     const [text3,setText3]=useState('')
//     const [text4,setText4]=useState('')
//     const inputref4=useRef("")
//     const inputref2=useRef("")
//     const inputref1=useRef("")
//     const inputref3=useRef("")
//     const handleAdd=()=>{
//         if(!text1.trim())return
//         setTodo([...todo,text1])
//         setText1('')
//         inputref4.current.focus()
//     }
//     useEffect(()=>{
//         inputref4.current.focus()
//         inputref2.current.focus()
//         inputref1.current.focus()
//         inputref3.current.focus()
//     },[])
//   return (
//     <div>
//         <h1>UseRef</h1>
//         <input type="text" value={text1} onChange={(e)=>setText1(e.target.value)} placeholder='First...'ref={inputref4}/>
//         <input type="text" value={text2} onChange={(e)=>setText2(e.target.value)} placeholder='second...'ref={inputref2}/>
//         <input type="text" value={text3} onChange={(e)=>setText3(e.target.value)} placeholder='Third...'ref={inputref1}/>
//         <input type="text" value={text4} onChange={(e)=>setText4(e.target.value)} placeholder='Fourth...'ref={inputref3}/>
//         <button onClick={()=>handleAdd ()}>AddText</button>
//         <ul>
//             {todo.map((item,index)=>{
//                 return (
//                     <li key={index}>{item}</li>
//                 )
//             })}
//         </ul>
//     </div>
//   )
// }
