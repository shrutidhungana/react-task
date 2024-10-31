
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../pages/Header";

import Products from "../pages/Product";
import Cart from "../pages/Cart";
import Details from "../pages/ProductDetails";
import Home from "../pages/Home";

const routes = [
  { path: "/", element: <Home /> },
  {path:"/products", element:<Products/>},
  { path: "/products/:slug", element: <Details /> },
  { path: "/carts", element: <Cart /> },
];

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Router>
);

export default AppRouter;
