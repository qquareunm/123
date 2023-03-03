import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='app-wrapper'>
    <Header />
    <Navbar />
    </div>
 );
}

export default App;
