import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSignIn from "./pages/HomeSignIn";
import HomeSignUp from "./pages/HomeSignUp";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeSignIn />} />
        <Route path="/Signup" exact element={<HomeSignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
