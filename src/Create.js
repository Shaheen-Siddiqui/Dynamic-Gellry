import React, { useState } from 'react'
import Node from './Node'

const Create = () => {
let [Item,setItem]=useState();
let [arrItem,setArrItem]=useState([]);

const Eventfire=(event)=>{
    setItem(event.target.value)
}
const UpdateValue=()=>{
     setArrItem((previous)=>{
        return [...previous,Item]
    })
    setItem("")}

const deletfac=(id)=>{
    setArrItem((previous)=>{
        return previous.filter((cur,index)=>{
            return id!==index
        })
    })
}
const Removeall=()=>{
    setArrItem([])}

return (
<div>
<div className='outermain'>
<div className='innermain'>
<section  className='sec1'>
<input className='inputfield' name='input' value={Item} type="text" onChange={Eventfire} placeholder='FilL your IteM' />
<button className='but' onClick={UpdateValue}>Add Item</button>
</section>

<section className='inin'>

{
    arrItem.map((curVal,index)=>{
         return <Node
            text={curVal}setArrItem
            id={index}
            passfac={deletfac}
        />
    })
}

<button className='btn-danger' onClick={Removeall}>clear all</button>

</section>
</div>
</div>
</div>
  )
}

export default Create
