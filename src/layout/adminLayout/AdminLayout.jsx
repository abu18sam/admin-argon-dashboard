import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
// import { Spinner } from 'reactstrap';
import Sidebar from '../../commonComponents/sidebar/Sidebar';
import { ADMIN_ROUTES } from '../../constants/RouterConstants';
import AdminNavbar from '../../commonComponents/navbar/AdminNavBar';
import AdminRoutes from '../../views/admin/Routes';

// const Dashboard = React.lazy(() => import('../../views/admin/dashboard/Dashboard'));
// const UserListing = React.lazy(()=>import('../../views/admin/manageUsers/UserListing'));

const AdminLayout = (props) => {

    const mainContent = React.useRef(null);
    const location = useLocation();



    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    // const getBrandText = (path) => {
    //     for (let i = 0; i < routes.length; i++) {
    //       if (
    //         props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
    //         -1
    //       ) {
    //         return routes[i].name;
    //       }
    //     }
    //     return "Brand";
    //   };

    return (
        <>
            <Sidebar
                {...props}
                logo={{
                    innerLink: ADMIN_ROUTES.DASHBOARD,
                    imgSrc: require("../../assets/img/brand/argon-react.png").default,
                    imgAlt: "...",
                  }}
            />
            <div className="main-content" ref={mainContent}>
                <AdminNavbar
                    {...props}
                    // brandText={getBrandText(props.location.pathname)}
                    brandText="HI"
                />
                <AdminRoutes />
                {/* <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact path={ADMIN_ROUTES.DASHBOARD} component={Dashboard} />
                        <Route exact path={ADMIN_ROUTES.USER_LISTING} component={UserListing} />
                        <Redirect to={ADMIN_ROUTES.DASHBOARD} />
                    </Switch>
                </Suspense> */}
                {/* <Container fluid>
                    <AdminFooter />
                </Container> */}
            </div>


        </>
    )
}

export default AdminLayout;