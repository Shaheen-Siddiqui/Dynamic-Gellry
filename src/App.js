import React, { useState } from 'react'
import Diffwork from './Diffwork'
import Array0Food from './Array'
import CatMenu from './CatMenu'



const catvalues=[...new Set(Array0Food.map((valElam)=>valElam.catogary))]

const App = () => {
let[item,setItem]=useState(Array0Food);
let [newItem,setNweItem]=useState(catvalues);


const filterItem=(Cetvalue)=>{
const connected=Array0Food.filter((cur,inx)=>{
    return cur.catogary===Cetvalue
  })
setItem(connected);}

return (<>    
    <CatMenu 
    filterItem={filterItem}
    newItem={newItem}  
    />
  
<div className='container'>    {
      item.map((current,index)=>{
      return(<>
      <Diffwork
      id={index}
      image={current.image}
      name={current.name}
      catogary={current.catogary}
      price={current.price}
      Description={current.Description}/>
      </>)
      })
      }
</div>
    </>

  )
}

export default App