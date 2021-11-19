import image from './images/hqdefault.jpg';
import './App.css';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={image} className="Gato-Bluetooch" alt="logo" />
        <p className="text">
          Gato Bluetooch
        </p>
        <a
        >
          Top 5 gatos más epicos de la historia
        </a>
      </header>
    </div>
  );
}

export default App;
