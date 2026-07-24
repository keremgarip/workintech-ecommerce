import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import PageContent from "./components/PageContent"
import Shop from "./components/Shop";
import Carousel from "./components/Carousel";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import Team from "./components/Team";
import AboutUs from "./components/AboutUs";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CategoriesList from "./components/CategoriesList";
import TopCategories from "./components/TopCategories";
import CartPage from "./components/CartPage";
import OrderSuccess from "./components/OrderSuccess";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyTokenOnLoad } from "./actions/authThunks";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateOrderPage from "./components/CreateOrder";
import OrdersPage from "./components/OrdersPage";
import { verifyTokenThunk } from "./actions/clientThunks";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyTokenThunk());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Carousel />
          <PageContent />
        </Route>

        
        <Route exact path="/shop">
          <Shop />
        </Route>

        <Route
          path="/product/:productId"
          component={ProductDetails}
        />


        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/team">
          <Team />
        </Route>

        <Route path="/about">
          <AboutUs />
        </Route>

        <Route path="/signup" component={Signup} />

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/cart">
          <CartPage />
        </Route>

        <ProtectedRoute path="/checkout" component={CreateOrderPage} />

        <Route path="/order-success">
          <OrderSuccess />
        </Route>

        <ProtectedRoute path="/previous-orders" component={OrdersPage} />

      </Switch>
      <Footer />
    </>
  )
}

export default App;
