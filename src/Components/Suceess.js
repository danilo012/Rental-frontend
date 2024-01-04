// Imported Required Files
import React,{useContext}  from 'react';
import {Link,useParams} from 'react-router-dom'
import {rentContext} from '../App';
function Success(){
    // useParams for get id from url
    let {id} = useParams();

    return <>
        <div>
            <h2 className='text-center mt-5' style={{color:"green"}}>Thanks! Your Order Is Confirm, PLEASE TAKE A SCREENSHOT OF YOUR ORDER NUMBER & SUBMIT TO YOUR TL</h2>
            <p className='blockquote text-center mt-3' style={{fontWeight:"bold"}}>Order ID : {id}</p>
    <p className='blockquote text-center mt-3' style={{fontWeight:"bold"}}>Order ID : {cartValue}</p>
            <Link to="/Help" className='mt-4 d-flex justify-content-center  text-decoration-none'>
            <button className='btn btn-outline-success text-light'>Continue For Renting</button>
            </Link>
        </div>
    </>
}

export default Success;
cartPrice
