import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import nav from "./nav";

function ItemComonent() {
  return (
    <Fragment>
      <ul className="vertical-nav-menu">
        {nav &&
          nav.map((Item) => (
            <Fragment key={Item.name}>
              <li className="app-sidebar__heading">{Item.heading}</li>
              <li className="mm-active">
                <Link to={Item.to}>
                  {Item.icon}
                  {Item.name}
                  {Item.arrow}
                </Link>
                {Item._children ? (
                  <ul>
                    {Item._children &&
                      Item._children.map((Chield) => (
                        <li key={Chield.name}>
                          <a href="dashboards-commerce.html">
                            {Chield.icon}
                            {Chield.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            </Fragment>
          ))}
      </ul>
    </Fragment>
  );
}

export default ItemComonent;
