import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Navbar from './Navbar';
import Orders from './Orders';

function Routes (){
    return(
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/orders">
                <Orders/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
