import React ,{useEffect,useRef} from 'react'
import {mount} from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';
const AuthApp = () => {

    const authRef = useRef(null)
    const history = useHistory();

    useEffect(()=>{
      const {onParentNavigate} = mount(authRef.current,{
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
    <div ref={authRef}></div>
    </>
  )
}

export default AuthApp