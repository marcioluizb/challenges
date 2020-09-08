import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Index from "./views/home/"
import SignIn from "./views/signin/"
import Logout from "./views/logout"
import Register from "./views/heros/register"
import List from "./views/heros/list"


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/signin" component={SignIn} />
      <Route path="/logout" component={Logout} />
      
      <PrivateRoute path="/register" component={Register} />
      <PrivateRoute path="/list" component={List} />
      
      <Route path="*" component={() => <h1>Página não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;