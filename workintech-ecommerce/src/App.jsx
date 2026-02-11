import {Switch, Route} from "react-router-dom";
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
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { verifyTokenOnLoad } from "./actions/authThunks";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyTokenOnLoad());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Carousel />
          <TopCategories />
          <CategoriesList />
          <PageContent />
        </Route>

        <Route path="/shop/:gender/:categoryNane/:categoryId" />
        <Route path="/shop">
          <Shop />
        </Route>

        <Route path="/product">
          <ProductDetails />
        </Route>

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

      </Switch>
      <Footer />
    </>
  )
}

export default App;
