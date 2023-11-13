import './App.css';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
import Header from './components/Header';
import MyCards from './components/MyCards';

function App() {
  return (
    <div className="App">
    <Header/>
    <MyCards/>    
    <Accordian/>
    <Footer/>
    
     
    </div>
  );
}

export default App;
