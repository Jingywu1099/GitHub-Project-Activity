import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="outerBox">
      <div className="box">
      <img className="img" src={logo} alt="logo"></img>
      <img className="img" src={logo} alt="logo"></img>
      <img className="img" src={logo} alt="logo"></img>
      <div className="innerBox">The Beagle is called Bella.</div>
      <div className="innerBox">The Siamese cat is called Louis.</div>
      <div className="innerBox">The Abyssinian cat is called Leon.</div>
   </div>
    </div>
  );
}

export default App;
