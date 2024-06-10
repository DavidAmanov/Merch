import './App.css';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
