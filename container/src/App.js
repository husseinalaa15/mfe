import React , {lazy , Suspense, useEffect, useState} from "react";
import Header from "./components/Header";
import { Router , Switch , Route } from "react-router-dom";
import { StylesProvider , createGenerateClassName } from '@material-ui/core/styles'
import {createBrowserHistory} from 'history'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const MarketingLazy =  lazy(()=>  import ('./components/MarketingApp'))
const AuthLazy =  lazy(()=>  import ('./components/AuthApp'))
const DashboardLazy = lazy(()=> import ('./components/DashboardApp'))

export default () => {
  const generateProductionPrefix = createGenerateClassName({
    productionPrefix:"co"
  })

  const history = createBrowserHistory()

  const [isSignedIn,setIsSignedIn] = useState(false);

  useEffect(()=>{
    if(isSignedIn){
      history.push('/dashboard')
      console.log('dashboar')
      console.log(isSignedIn)
      
    }
  },[isSignedIn,history])
  return (
    <Router history={history}>
        <StylesProvider generateClassName={generateProductionPrefix}>
          <Header signedIn={isSignedIn}  onSignOut={()=>setIsSignedIn(false)}/>
          <Suspense fallback={<div>Loading...</div>} >
          <Switch>
              <Route path="/auth"  >
                <AuthLazy onSignin={()=>setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard"  >
                {!isSignedIn && <Redirect  to="/"/>}
                <DashboardLazy />
                </Route>
              <Route path="/" component={MarketingLazy} /> 

            </Switch>
          </Suspense>
           
        </StylesProvider>
    </Router>
  );
};
