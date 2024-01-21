import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter , Switch } from "react-router-dom";
import { StylesProvider , createGenerateClassName } from '@material-ui/core/styles'

export default () => {
  const generateProductionPrefix = createGenerateClassName({
    productionPrefix:"co"
  })
  return (
    <BrowserRouter>
      <Switch>
        <StylesProvider generateClassName={generateProductionPrefix}>
          <Header />
          <MarketingApp />

        </StylesProvider>
      </Switch>
    </BrowserRouter>
  );
};
