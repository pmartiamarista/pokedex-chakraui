import { createElement } from "react";
import Layout from "layout/Layout";
import { HashRouter, Route, Switch } from "react-router-dom";

export default function Redirect() {

  const MainRoutes = ({ component, ...rest }) => {
    return (
      <Route {...rest} render={(props) => createElement(component, props)} />
    );
  };

  return (
    <HashRouter>
      <Switch>
        <MainRoutes path="/" component={Layout} />
      </Switch>
    </HashRouter>
  );
}
