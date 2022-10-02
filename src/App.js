import './App.css';
import Hero from './part/Hero'
import Navigation from "./part/Navigation"
import Product from './part/Product'
import Categories from './part/Categories';
import Footer from './part/Footer';
import Login from './component/Login';

function App() {
  return (
    <>
    <Navigation/>
    <Hero/>
    <Categories/>
    <Product/>
    <Login/>
    <Footer/>
      </>
  );
}

export default App;
