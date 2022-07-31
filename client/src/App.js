import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories/:id" element={<Categories/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;