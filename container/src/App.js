import React , {lazy , Suspense, useEffect, useState} from "react";
import Header from "./components/Header";
import { Router , Switch , Route } from "react-router-dom";
import { StylesProvider , createGenerateClassName } from '@material-ui/core/styles'
import {createBrowserHistory} from 'history'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const MarketingLazy =  lazy(()=>  import ('./components/MarketingApp'))
const AuthLazy =  lazy(()=>  import ('./components/AuthApp'))
const DashboardLazy = lazy(()=> import ('./components/DashboardApp'))
const history = createBrowserHistory()

export default () => {
  const generateProductionPrefix = createGenerateClassName({
    productionPrefix:"co"
  })


  const [isSignedIn,setIsSignedIn] = useState(false);

  useEffect(()=>{
    if(isSignedIn){
        
        history.push('/dashboard')

      
    }else{
      history.replace('/')
    }
  },[isSignedIn])
  return (
    <Router history={history}>
        <StylesProvider generateClassName={generateProductionPrefix}>
          <Header signedIn={isSignedIn}  onSignOut={()=>{setIsSignedIn(false);    history.replace('/');
}}/>
          <Suspense fallback={<div>Loading...</div>} >
          <Switch>
              <Route path="/auth"  >
                <AuthLazy onSignin={()=>setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard"  >
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} /> 

            </Switch>
          </Suspense>
           
        </StylesProvider>
    </Router>
  );
};
