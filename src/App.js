import Header from './components/Header'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = () => {
  return (
  <div>
  <div className="body-wrap">
    <Header/>
    <main className="site-content">
      <Hero/>
      <Clients/>
      <Features/>
      <Pricing/>
    </main>
    <Footer/>
  </div>
</div>


  );
};

export default App;