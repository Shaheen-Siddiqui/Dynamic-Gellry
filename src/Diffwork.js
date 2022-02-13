import React from 'react'

const Diffwork = (props) => {
  return (
    // <div className='container'>
    <div className="card" style={{width: "18rem"}}>
    <img src={props.image} className="card-img-top" alt="showing something...."/>
    <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-title">{props.catogary}</h6>
    <p className="card-title">{props.price} </p>
    <p className="card-text">{props.Description} </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    // </div> 
  )
}
export default Diffwork;
