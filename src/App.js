
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Second from'./components/Second'
import Last from './components/Last'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Second/>
      <Last/>
      <Footer/>
    </div>
  );
}

export default App;
