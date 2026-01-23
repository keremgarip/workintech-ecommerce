import AllProducts from "./components/AllProducts"
import BestSeller from "./components/BestSeller"
import Blog from "./components/Blog"
import Clients from "./components/Clients"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MostPopular from "./components/MostPopular"
import Popular from "./components/popular"
import Products from "./components/products"
import ShopCards from "./components/shopCards"

function App() {

  return (
    <>
      <Header />
      <ShopCards />
      <BestSeller />
      <Popular />
      <Products />
      <MostPopular />
      <AllProducts />
      <Clients />
      <Blog />
      <Footer />
    </>
  )
}

export default App;
