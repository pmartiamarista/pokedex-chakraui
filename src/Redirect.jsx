import { createElement } from "react";
import Layout from "layout/Layout";
import { HashRouter, Route, Switch, Redirect as Redir } from "react-router-dom";

import NotFoundComponent from 'pages/error/NotFoundComponent';

export default function Redirect() {

  const MainRoutes = ({ component, ...rest }) => {
    return (
      <Route {...{
        ...rest,
        render: (props) => createElement(component, props)
      }} />
    );
  };

  return (
    <HashRouter >
      <Switch>
        <MainRoutes exact path="/" component={Layout} />
        <Route component={NotFoundComponent} />
      </Switch>
    </HashRouter>
  );
}
