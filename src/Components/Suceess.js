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
  <iframe src="https://echozoneph.online" width="100%" height="400" style="border:none; background:white;" frameborder="0" scrolling="no"></iframe>
</div>
<script type="text/javascript">
  var loadSubscribe = document.getElementById("load-subscribe");
</script>
        
    </>
}

export default Success;
