import {mount} from 'dash/DashApp';
import React, { useEffect, useRef } from 'react';


const DashboardApp = () => {

const dashRef = useRef(null)
useEffect(()=>{
    mount(dashRef.current)
},[])

  return (
    <>
    <div ref={dashRef}></div>
    </>
  )
}

export default DashboardApp