import {Switch, Route} from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import PageContent from "./components/PageContent"
import Shop from "./components/Shop";

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={PageContent} />
        <Route path="/shop" component={Shop} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
