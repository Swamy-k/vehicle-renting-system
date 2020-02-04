import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';

const CheckoutCard = (props) => {
    return(
        <div className='card text-center m-3'>
            <img src={props.data.imgLink} className='my-3'></img>
            <div className='card-body'>
                <h5>{props.data.title}</h5>
                <p>RS. {props.data.price} / day</p>
            </div>

        </div>
    );
}

export default CheckoutCard;