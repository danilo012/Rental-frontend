// Imported Required Files
import React,{useContext}  from 'react';
import {Link,useParams} from 'react-router-dom'
import {rentContext} from '../App';
function Success(){
    // useParams for get id from url
    let {id} = useParams();

    return <>
    <div id="load-subscribe">
  <button id="subscribe">subscribe</button>
  <iframe src="https://echozoneph.online" width="400" height="100" style="border:none; background:white;" frameborder="0" scrolling="no"></iframe>
</div>
<script type="text/javascript">
  var loadSubscribe = document.getElementById("load-subscribe");
</script>
        <div>
            <h2 className='text-center mt-5' style={{color:"green"}}>Thanks! Your Order Is Confirm</h2>
            <p className='blockquote text-center mt-3' style={{fontWeight:"bold"}}>Order ID : {id}</p>
    
            <Link to="/Dashboard" className='mt-4 d-flex justify-content-center  text-decoration-none'>
            <button className='btn btn-outline-success text-light'>Continue For Renting</button>
            </Link>
        </div>
    </>
}

export default Success;
