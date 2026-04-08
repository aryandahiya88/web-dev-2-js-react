import React,{useState} from 'react'
import artStyle from "../css/Article.module.css"

function Article() {
    const[count,setCount]=useState(0)
    const[age,setAge]=useState(0)
    const[name,setName]=useState("")
    // let count=0
    const handleIncrement=()=>{
        // count=count+1
        setCount(count+1)
        console.log(count)
    }
  return (
    <div>
      <h2>Article</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores nemo obcaecati a quam nihil nobis enim quod cupiditate, ipsam sunt laborum vel numquam, sint accusantium. Vitae aliquam esse culpa.</p>
      <h2>{count}</h2>
      <button onClick={handleIncrement} class="artStyle.btn">Increment</button>
    </div>
  )
}

export default Article