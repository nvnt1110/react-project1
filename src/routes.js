import Home from "./screens/home/Home";
import Product from "./screens/product/Product";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "product", element: <Product /> }
    ]
  }
];
export default routes;
