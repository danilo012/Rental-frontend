import React from 'react';

function Help(){

    return <>
           
    <div class="container">
      W3Docs
      <a href="https://www.w3docs.com/">
        <span class="link"></span>
      </a>
    </div>
        <style>
        div {
        background-color: blue;
        color: white;
        font-size: 24px;
        border: 2px solid black;
        padding: 10px;
        margin: 5px;
    }
      .container {
        font-size: 5em;
        background-color: #a8a8a8;
        color: white;
        width: 8em;
        height: 2em;
        line-height: 2;
        text-align: center;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: bold;
        cursor: pointer;
        position: relative;
      }
      .link {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
      }
    </style>
    </>
}

export default Help;
