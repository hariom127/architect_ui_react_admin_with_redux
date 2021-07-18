import Dashboard from "../pages/DashboardPage";
import Users from "../pages/Users/UserPage";
import Products from "../pages/Products/ProductsPage";
import ProductDetail from "../pages/Products/ProductDetailsPage";

const route = [
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
    title: "Dashboard",
  },
  {
    path: "/users",
    exact: true,
    name: "users",
    component: Users,
    title: "Users Manager",
  },
  {
    path: "/products",
    exact: true,
    name: "products",
    component: Products,
    title: "Products Manager",
  },
  {
    path: "/product/6",
    exact: true,
    name: "ProductDetails",
    component: ProductDetail,
    title: "Products Details",
  },
];

export default route;
