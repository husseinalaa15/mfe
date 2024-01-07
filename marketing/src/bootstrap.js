
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// MOUNT Function to start  up the app 
const mount = (el)=>{
    ReactDom.render(<App/>,el)
}


//  if we are in development and in isolation
// call mount 

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#marketing-root')
    if(devRoot){
        mount(devRoot)
    }
}


// we running through container 
// and we should export the mount function 

export {mount}