import './App.css';
import { Routes, Route } from "react-router-dom";
import Desctmenu from './components/Desctmenu/Desctmenu';
import Velocity from './components/ComMenu/Velocity';
import Gravity from './components/ComMenu/Gravity';
import Hyperbolic from './components/ComMenu/Hyperbolic';
import Ganymede from './components/ComMenu/Ganymede';
import Quasimodo from './components/ComMenu/Quasimodo';
import Progectiels from './components/ComMenu/Progectiels';
import Titlemenu from './components/Titlemenu.js/Titlemenu';

function App() {
  return (
    <div className="App" >
      <div>
        <Routes>
        <Route path="/" element={<Titlemenu />} />
          <Route path="/menu" element={<Desctmenu />} />
          <Route path="/velocity" element={<Velocity />} />
          <Route path="/progectiels" element={<Progectiels />} />
          <Route path="/gravity" element={<Gravity />} />
          <Route path="/quasimodo" element={<Quasimodo />} />
          <Route path="/hyperbolic" element={<Hyperbolic />} />
          <Route path="/ganymede" element={<Ganymede />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
