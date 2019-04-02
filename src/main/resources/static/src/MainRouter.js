import React from 'react';
import Home from './component/Homepage';
import SignUpInForm from './component/SignUpInForm';
import {Route, Switch, Redirect} from "react-router-dom";
import { confidureAxios } from "./util/apiUtils";
import ReviewForm from './component/review/ReviewForm.jsx'

export default class MainRouter extends React.Component{

    render() {

        confidureAxios();

        return(
            <main>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/auth' component={SignUpInForm} />
                    <Route path='/reviews'  render={()=><ReviewForm targetId={2}/>} />
                    <Redirect path='*' to='/home' />
                </Switch>
            </main>
        );
    }
}