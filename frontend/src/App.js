import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSignIn from "./pages/HomeSignIn";
import HomeSignUp from "./pages/HomeSignUp";
import GeneralHome from "./pages/GeneralHome";
import GeneralHomeOnePub from "./pages/GeneralHomeOnePub";
import Profil from "./pages/Profil";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeSignIn />} />
        <Route path="/Signup" exact element={<HomeSignUp />} />
        <Route path="/home" exact element={<GeneralHome />} />
        <Route path="/homePub" exact element={<GeneralHomeOnePub />} />
        <Route path="/home/profil" exact element={<Profil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
