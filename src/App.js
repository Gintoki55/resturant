import './App.css';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Homepage />
        <Footer />
    </div>
  );
}

export default App;
