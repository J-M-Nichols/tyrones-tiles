import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Casual from "./components/game/Casual";

function App() {
  return (
    <div >
      <NavigationBar />
      <main 
        className="mt-5 p-5 mb-5 pb-5"
      >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/casual' element={<Casual />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
