import {Switch, Route} from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import PageContent from "./components/PageContent"
import Shop from "./components/Shop";
import Carousel from "./components/Carousel";
import ProductDetails from "./components/ProductDetails";

function App() {

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Carousel />
          <PageContent />
        </Route>

        <Route path="/shop">
          <Shop />
        </Route>

        <Route path="/product">
          <ProductDetails />
        </Route>

      </Switch>
      <Footer />
    </>
  )
}

export default App;
