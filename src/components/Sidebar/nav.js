import React from "react";
import IconComponent from "./IconComponent";

const nav = [
  {
    heading: "Dashboard",
    name: "Dashboard",
    to: "/",
    icon: (
      <IconComponent class_name="metismenu-icon pe-7s-rocket"></IconComponent>
    ),
    arrow: "",
  },
  {
    heading: "User Manager",
    name: "Users",
    to: "/users",
    icon: (
      <IconComponent class_name="metismenu-icon pe-7s-rocket"></IconComponent>
    ),
    // arrow: <IconComponent class_name="metismenu-state-icon pe-7s-angle-down caret-left"></IconComponent>,
    // _children: [
    //   {
    //     name: 'Breadcrumb',
    //     to: '/base/breadcrumbs',
    //     icon: <IconComponent class_name="'metismenu-icon'"></IconComponent>,
    //   }
    // ]
  },
  {
    heading: "Product Manager",
    name: "Product",
    to: "/products",
    icon: (
      <IconComponent class_name="metismenu-icon pe-7s-rocket"></IconComponent>
    ),
    arrow: "",
  },
];

export default nav;
