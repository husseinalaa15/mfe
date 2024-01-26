import {createApp} from 'vue'
import Dashboard from './components/Dashboard.vue'


// MOUNT Function to start  up the app 
const mount = (el)=>{
   const app = createApp(Dashboard)
  //  this app.mount function is releated to vue is how we tell vue to show a component inside the DOM
   app.mount(el)
}




if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#dash-dev-root')
    if(devRoot){
        mount(devRoot)
    }
}


// we running through container 
// and we should export the mount function 

export {mount}