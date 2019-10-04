import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});
// React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});
// React.lazy(() => import('./views/Pages/Login'));
const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});
//React.lazy(() => import('./views/Pages/Register'));
const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

//React.lazy(() => import('./views/Pages/Page404'));
const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
})
// React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
        {/* <React.Suspense fallback={loading()}> */}
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500}  />} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
        {/* </React.Suspense> */}
      </HashRouter>
    );
  }

}

export default App;
