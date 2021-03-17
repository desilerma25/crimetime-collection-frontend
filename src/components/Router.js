import React from 'react';
import { Switch, Route } from 'react-router-dom';
// switch allows to nav between diff routes
// helps with optimization, matches route were navigating to
import App from '../App'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/'component={ App } />
        </Switch>
    );
};

export default Router;