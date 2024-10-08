import { Route, Routes, useLocation } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Casual from "./components/game/Casual";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTiles } from "./features/tileSlice/tilesSlice";
import Challenge from "./components/game/Challenge";
import { handleChallengeGameStart } from "./features/handleGame";
import AboutMe from "./components/AboutMe";

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(location.pathname==='/casual') dispatch(setTiles([]))
    if(location.pathname==='/challenge') dispatch(handleChallengeGameStart())
  },[location.pathname, dispatch])

  return (
    <div 
      className="custom-scrollbar-css vh-100"
    >
      <NavigationBar />
      <main 
        className="mt-5 p-5 mb-5 pb-5"
      >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/casual' element={<Casual />} />
          <Route exact path='/challenge' element={<Challenge />} />
          <Route exact path='/about-me' element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
