import React ,{useEffect,useRef} from 'react'
import {mount} from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';
const AuthApp = ({onSignin}) => {

    const authRef = useRef(null)
    const history = useHistory();

    useEffect(()=>{
      const {onParentNavigate} = mount(authRef.current,{
        initialPath:history.location.pathname,
        onNavigate: ({pathname:nextPathname})=>{
          const {pathname } = history.location
          if(pathname !== nextPathname){
            history.push(nextPathname)
          }
        },
          onSignin,
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