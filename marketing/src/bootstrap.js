
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {createMemoryHistory,createBrowserHistory} from 'history'

// MOUNT Function to start  up the app 
const mount = (el,{onNavigate,defaultHistory,initialPath})=>{
    const history = defaultHistory || createMemoryHistory({
      initialEntries:[initialPath]
    })
    if(onNavigate){
        history.listen(onNavigate)
    }
    ReactDom.render(<App history={history}/>,el)
    return{
      onParentNavigate({pathname:nextPathname}){
        const {pathname} = history.location;
        if(pathname !== nextPathname){
          history.push(nextPathname)
        }
      }
    }
}


//  if we are in development and in isolation
// call mount 

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#marketing-root')
    if(devRoot){
        mount(devRoot,{defaultHistory: createBrowserHistory()})
    }
}


// we running through container 
// and we should export the mount function 

export {mount}