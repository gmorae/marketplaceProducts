import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home';
import NewProduct from './pages/newProduct';
import Login from './pages/login';
import NewUser from './pages/newUser';

function Routes() {
    return (
        <Router>
            <Route path='/' exact component={Login} />
            <Route path='/register' component={NewUser} />
            <Route path='/home' component={Home} />
            <Route path='/newProduct' component={NewProduct} />
            <Route path='/editProduct/:id' component={NewProduct} />
        </Router>
    );
}

export default Routes;