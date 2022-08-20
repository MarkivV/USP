import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Main from "./pages/Main/Main";
import Categories from "./pages/Categories/Categories";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register/Register";
import CardDetails from "./pages/CardDetails/CardDetails";
import Suggest from "./pages/Suggest/Suggest";




function App() {
  return (
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route exact path="/"  element={<Navigate to={"/main"}/>}/>
          <Route exact path="/main" element={<Main/>}/>
          <Route exact path="/categories/:category" element={<Categories/>}/>
          <Route exact path="/profile/:id" element={<Profile/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/publication/:id" element={<CardDetails/>}/>
          <Route exact path="/suggest" element={<Suggest/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;