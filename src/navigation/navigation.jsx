import React, { Suspense } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history'
import AuthLayout from '../layout/authLayout/AuthLayout';
import AdminLayout from '../layout/adminLayout/AdminLayout';
import { ADMIN_LAYOUT, AUTH_LAYOUT } from '../constants/RouterConstants';

const history = createBrowserHistory();

const Navigation = (props) => {
    
    return (
        <>
            <BrowserRouter history={history}>
                <Suspense>
                    <Switch>
                        <Route path={AUTH_LAYOUT} component={AuthLayout} />
                        <Route path={ADMIN_LAYOUT} component={AdminLayout} />
                        <Redirect to={AUTH_LAYOUT} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default Navigation;