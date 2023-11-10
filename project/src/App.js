import './App.css';
import FormValidation from './components/pages/FormValidation';
import Game from './components/pages/Game/Game';
// import AllRoutes from './components/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <div>
        <div style={{ marginBottom: "2rem" }}>Form Validation</div>
        <FormValidation />
      </div>

      <hr />
      <div>
        <div style={{ marginBottom: "2rem" }}>Tile Game</div>
        <Game />
      </div>

    </div>
  );
}

export default App;
