import React from 'react';

function Help(){

    return <>
    <div className='d-flex' style={{flexDirection:"column"}}>
        <h3 className='text-center mt-4'>If u have any query than contact me via mail</h3>
        <button className='btn btn-outline-success mt-3' onClick={()=>window.location = 'mailto:harmitsonani@gmail.com'} target="_blank" rel="noopener noreferrer" style={{marginLeft:"900px",marginRight:"900px"}} >Contact Me</button>
    </div>
    </>
}

export default Help;