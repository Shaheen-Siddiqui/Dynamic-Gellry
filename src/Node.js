import React from 'react'
import Create from './Create'

const Node = (props) => {
  return (
    <div className='peraOuter'>

<i class="fa fa-pencil-square-o" style={{fontSize:"30px"}}></i>
<i class="fa fa-plus-circle" style={{fontSize:"30px"}} onClick={()=>{
    props.passfac(props.id)
}} ></i>
<p className='upag'>{props.text} </p>


    </div>
  )
}

export default Node
