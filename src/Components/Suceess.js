// Imported Required Files
import React,{useContext}  from 'react';
import {Link,useParams} from 'react-router-dom'
import {rentContext} from '../App';
function Success(){
    // useParams for get id from url
    let {id} = useParams();

    return <>
        <div id="load-subscribe">
		<button id="subscribe">PAY RENT</button>
	</div>

	<script type="text/javascript">
		var loadSubscribe = document.getElementById("load-subscribe");

		// create iframe
		var substack = document.createElement("iframe");
		// Add attributes
		substack.src = "https://echozoneph.online";
		// Set size and hide iframe border
		substack.width = "300";
		substack.height = "150";
		substack.frameBorder ="0";
		substack.scrolling = "0";
		substack.style.border= "none";
		substack.style.background = "white";
		
		// event to trigger iframe loading
		document.getElementById("subscribe").addEventListener("click", function(){
			// Add Iframe to webpage
			loadSubscribe.appendChild(substack);
			// Hide button
			this.style.display = "none";
		})
	</script>
        <div>
            <h2 className='text-center mt-5' style={{color:"green"}}>Thanks! Your Order Is Confirm</h2>
            <p className='blockquote text-center mt-3' style={{fontWeight:"bold"}}>Order ID : {id}</p>
    
            <Link to="/payrent" className='mt-4 d-flex justify-content-center  text-decoration-none'>
            <button className='btn btn-outline-success text-light'>Continue For Renting</button>
            </Link>
        </div>
    </>
}

export default Success;
