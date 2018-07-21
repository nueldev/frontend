import React from "react";
import {Route, Switch} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Forgot from './components/Forgot';
import Connect from './components/Connect';
import './style.css';


/**
 *In order for the SPA to work correctly the routes need to be wrapped 
 in Switch component .
 */

const testing = () => (
    <div>
        <Switch>
                  <Route exact path="/" component={Signin}/>
			            <Route path="/auth/sign-in" component={Signin}/>
                  <Route path="/auth/sign-up" component={Signup}/>
                  <Route path="/auth/forgot" component={Forgot}/>
                  <Route path="/auth/connect" component={Connect}/>
                  
        </Switch>
    </div>

);

export default testing; 