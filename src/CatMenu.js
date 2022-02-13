import React from 'react'

const CatMenu = ({filterItem,newItem}) => {
  return (
    <div>
    <div className='navbar'>

{newItem.map((curElep,index)=>{
return  <button key={index} className='btn btn-dark' onClick={()=> filterItem(curElep)} >{curElep}</button> 
    })
}
</div>
</div>
  )
}

export default CatMenu
