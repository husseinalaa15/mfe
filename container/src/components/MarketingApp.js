import React ,{useEffect,useRef} from 'react'
import {mount} from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';
const MarketingApp = () => {

    const marketingRef = useRef(null)
    const history = useHistory();

    useEffect(()=>{
      const {onParentNavigate} = mount(marketingRef.current,{
        initialPath:history.location.pathname,
        onNavigate: ({pathname:nextPathname})=>{
          const {pathname } = history.location
          if(pathname !== nextPathname){
            history.push(nextPathname)
          }
        }
      })

      history.listen(onParentNavigate)

    },[])

  return (
    <>
    <div ref={marketingRef}></div>
    </>
  )
}

export default MarketingApp