import React , {lazy , Suspense, useState} from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter , Switch , Route } from "react-router-dom";
import { StylesProvider , createGenerateClassName } from '@material-ui/core/styles'
import AuthApp from "./components/AuthApp";


const MarketingLazy =  lazy(()=>  import ('./components/MarketingApp'))
const AuthLazy =  lazy(()=>  import ('./components/AuthApp'))


export default () => {
  const generateProductionPrefix = createGenerateClassName({
    productionPrefix:"co"
  })


  const [isSignedIn,setIsSignedIn] = useState(false)
  return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateProductionPrefix}>
          <Header signedIn={isSignedIn}  onSignOut={()=>setIsSignedIn(false)}/>
          <Suspense fallback={<div>Loading...</div>} >
          <Switch>
              <Route path="/auth"  >
                <AuthLazy onSignin={()=>setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingApp} /> 

            </Switch>
          </Suspense>
           
        </StylesProvider>
    </BrowserRouter>
  );
};
