import Layout from "./components/Layout";
import Add from "./pages/add/Add";
import Category from "./pages/category/Category";
import HeroPage from "./pages/hero/HeroPage";
import Products from "./pages/product/Products";
import Testimonial from "./pages/testimonial/Testimonial";
import Support from "./pages/support/Support";
import "./App.css";
import FaqList from "./pages/faqs/FaqList";
const App = function () {
  return (
    <Layout>
      <HeroPage />
      <Category />
      <Support />
      <Products />
      <Add />
      <Testimonial />
      <FaqList/>
    </Layout>
  );
};

export default App;
