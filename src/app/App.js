import LoginPage from "../pages/Login";
import "../assets/css/normalize.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/home"

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        {/*<Route path="home" element={<HomePage/>} />*/}
    </Routes>

  );
}

export default App;
