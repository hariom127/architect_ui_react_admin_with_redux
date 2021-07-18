import React, { Fragment } from "react";

function ButtonComponent(props) {
  const { class_name, name, icon } = props;

  return (
    <Fragment>
      <button className={class_name}>
        {icon} {name}
      </button>
    </Fragment>
  );
}

export default ButtonComponent;
