import React ,{useEffect,useRef} from 'react'
import {mount} from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';
const MarketingApp = () => {

    const marketingRef = useRef(null)
    const history = useHistory();
    useEffect(()=>{
        const {onParentNavigation} = mount(marketingRef.current,{
          onNavigate:({pathname:nextPathName})=>{
            const {pathname}   =  history.location
            if(pathname !== nextPathName){
              history.push(nextPathName)

            }
          }
        })
        history.listen(onParentNavigation);

    },[])

  return (
    <>
    <div ref={marketingRef}></div>
    </>
  )
}

export default MarketingApp