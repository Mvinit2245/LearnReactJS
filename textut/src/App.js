
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (

    <>
    <Navbar title="TextUtils2" aboutText="About TextUtils"/>
     <div className="container my-3">
    {/* <TextForm heading="Enter Text To Convert it into Upper or Lower Case"/> */}

    <About/>
    </div>
    </>
    
  );
}

export default App;
