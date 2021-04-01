import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ADMIN_LAYOUT, DASHBOARD, USER_LISTING, ADD_USER, EDIT_USER } from '../../constants/RouterConstants';
import { Spinner } from 'reactstrap';

const AdminDashboard = lazy(()=>import('./dashboard/Dashboard'));

const UserListing = lazy(()=>import('./manageUsers/UserListing'));
const AddUser = lazy(()=>import('./manageUsers/AddUser'));

const AdminRoutes = () => {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Route exact path={`${ADMIN_LAYOUT}${DASHBOARD}`} >
                        <AdminDashboard />
                    </Route>
                    <Route exact path={`${ADMIN_LAYOUT}${USER_LISTING}`} >
                        <UserListing />
                    </Route>
                    <Route exact path={`${ADMIN_LAYOUT}${ADD_USER}`} >
                        <AddUser />
                    </Route>
                </Switch>
            </Suspense>
        </>
    )
}

export default AdminRoutes;