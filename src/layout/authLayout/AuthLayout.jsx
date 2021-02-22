import React, { Suspense } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col, Spinner } from "reactstrap";
import { AUTH_LAYOUT, FORGOT_PASSWORD, LOGIN, SIGN_UP } from "../../constants/RouterConstants";

// // core components
// import AuthNavbar from "components/Navbars/AuthNavbar.js";
// import AuthFooter from "components/Footers/AuthFooter.js";

const Login = React.lazy(() => import('../../views/auth/login/Login'));
const ForgotPassword = React.lazy(()=>import('../../views/auth/forgotpassword/ForgotPassword'));
const Signup = React.lazy(()=>import ('../../views/auth/signup/Signup'));

const AuthLayout = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
        document.body.classList.add("bg-default");
        return () => {
            document.body.classList.remove("bg-default");
        };
    }, []);
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    // const getRoutes = (routes) => {
    //     return routes.map((prop, key) => {
    //         let Component = prop.Component
    //         if (prop.layout === AUTH_LAYOUT) {
    //             return (
    //                 <Route
    //                     path={prop.layout + prop.path}
    //                     component={Component}
    //                     key={key}
    //                 />
    //             );
    //         } else {
    //             return null;
    //         }
    //     });
    // };

    return (
        <>
            <div className="main-content justify-content-center" ref={mainContent}>
                {/* <AuthNavbar /> */}
                {/* <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div> */}
                {/* Page content */}
                <Container className="" style={{ margin: "auto", padding: "auto" }}>
                    <Row className="justify-content-center" style={{ marginTop: "15%" }}>
                        <Suspense fallback={<Spinner/>}>
                            <Switch>
                                <Route exact
                                    path={`${AUTH_LAYOUT}${LOGIN}`}
                                    component={Login}
                                />
                                 <Route exact
                                    path={`${AUTH_LAYOUT}${FORGOT_PASSWORD}`}
                                    component={ForgotPassword}
                                />
                                <Route exact
                                    path={`${AUTH_LAYOUT}${SIGN_UP}`}
                                    component={Signup}
                                />
                                {/* {getRoutes(AuthRoutes)} */}
                                <Redirect from="*" to={`${AUTH_LAYOUT}${LOGIN}`} />
                            </Switch>
                        </Suspense>
                    </Row>
                </Container>
            </div>
            {/* <AuthFooter /> */}
        </>
    );
};

export default AuthLayout;
