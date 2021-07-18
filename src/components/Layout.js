import React, { Fragment } from "react";
// import Aux from 'react-aux';
import SidebarComponent from "./Sidebar/SidebarComponent";
import HeaderComponent from "./Header/HeaderComponent";
import DashboardPage from "../pages/DashboardPage";
import FooterComponent from "./Footer/FooterComponent";
import ProductDetailsPage from "../pages/Products/ProductDetailsPage";
import { Switch, Route } from "react-router-dom";
import adminRoute from "../routes/admin";

function Layout() {
  const menu = adminRoute.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) => <route.component {...props} title={route.title} />}
      />
    ) : null;
  });

  return (
    <Fragment>
      <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
        {/* header start */}
        <HeaderComponent />
        {/* header end */}

        <div className="app-main">
          {/* Sidebar Start */}
          <SidebarComponent />
          {/* Sidebar End */}
          <div className="app-main__outer">
            {/* page content start */}

            <Switch>
              {menu}
              <Route path="/" component={DashboardPage} exact={true} />
              <Route
                path="/product/:productId"
                component={ProductDetailsPage}
                exact={true}
              />
            </Switch>

            {/* page content end */}

            {/* footer start */}
            <FooterComponent />
            {/* footer End */}
          </div>
        </div>
      </div>
      <div className="app-drawer-wrapper">
        <div className="drawer-nav-btn">
          <button
            type="button"
            className="hamburger hamburger--elastic is-active"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div className="app-drawer-overlay d-none animated fadeIn"></div>
    </Fragment>
  );
}

export default Layout;
