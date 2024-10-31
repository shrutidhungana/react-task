
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../pages/Header";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Details from "../pages/ProductDetails";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/product/:slug", element: <Details /> },
  { path: "/cart", element: <Cart /> },
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
