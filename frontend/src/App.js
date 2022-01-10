import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSignIn from "./pages/HomeSignIn";
import HomeSignUp from "./pages/HomeSignUp";
import GeneralHome from "./pages/GeneralHome";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeSignIn />} />
        <Route path="/Signup" exact element={<HomeSignUp />} />
        <Route path="/GeneralHome" exact element={<GeneralHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
