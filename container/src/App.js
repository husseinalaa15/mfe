import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter , Switch } from "react-router-dom";
import { StylesProvider , createGenerateClassName } from '@material-ui/core/styles'
import AuthApp from "./components/AuthApp";

export default () => {
  const generateProductionPrefix = createGenerateClassName({
    productionPrefix:"co"
  })
  return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateProductionPrefix}>
          <Header />
            <Switch>
              <Route path="/auth" component={AuthApp} />
              <Route path="/" component={MarketingApp} /> 

            </Switch>
        </StylesProvider>
    </BrowserRouter>
  );
};
