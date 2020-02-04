import React from 'react'
import { BrowserRoter, Link, Route } from 'react-router-dom'
import Checkout from './Checkout';

const Vehicle = (props) => {
    console.log(props);
    return (
        <div className='card my-3'>
            <div className='row no-gutters'>
                <div className='col-md-2 my-3'>
                    <img src={props.data.imgLink}></img>
                </div>
                <div className='col-md-7 my-3'>
                    <h4 className='card-title'>{props.data.title}</h4>
                    <div className='row'>
                        <p className='col'>Seater: {props.data.seater}</p>
                        <p className='col'>Type: {props.data.type}</p>
                        <p className='col'>Air Bags: {props.data.bags}</p>
                        <p className='col'>Age Limit: {props.data.age}</p>
                    </div>
                    <p className='card-text' >{props.data.distance} kms from starting point</p>
                </div>
                <div className='col-md-3 my-3'>
                    <h3 className='text-center' style={{marginLeft: '85px'}}>₹{props.data.price}</h3>
                    <p className='text-center' style={{marginLeft: '85px'}}>Excess Rs{props.data.excess}/km</p>
                    <Link to='/checkout' className='btn btn-primary' style={{marginLeft: '85px'}} onClick={() => props.func(props.data.id)}>BOOK NOW</Link>
                                    
                </div>
            </div>
        </div>
    )
}

export default Vehicle;