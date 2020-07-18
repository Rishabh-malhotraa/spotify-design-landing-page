import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Landing}></Route>
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
