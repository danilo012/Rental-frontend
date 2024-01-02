import React from 'react';

function Help(){

    return <>
           <style>
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
        <body>
    <div class="container">
      W3Docs
      <a href="https://www.w3docs.com/">
        <span class="link"></span>
      </a>
    </div>
  </body>
    </>
}

export default Help;
