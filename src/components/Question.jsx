import {useState} from 'react'
import { GrFormAdd } from "react-icons/gr";
const Question = ({id,title,info})=>{
    const[show,setShow]= useState(false)
    return(
        <article className='question' >
            <header>
            <h5>{title} </h5>
            <span className='question-btn' onClick={()=>setShow(!show)}><GrFormAdd/></span>
            </header>
           
            <p>{ show?info:''}</p>
        </article>
    )
}

export default Question