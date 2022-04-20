import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Toolbar from "./components/Toolbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import mainContext from "./context/mainContext";
import {useState} from "react";
import CreateApartmentOfferPage from "./pages/CreateApartmentOfferPage";
import AllOffersPage from "./pages/AllOffersPage";

function App() {

    const [getUser, setUser] = useState({})
    const [getError, setError] = useState(null)
    const [getLoggedIn, setLoggedIn] = useState("")
    const [getPost, setPost] = useState([])



  return (
    <div className="App ">
        <mainContext.Provider value = {{getUser, setUser, getError, setError, setLoggedIn, getLoggedIn, getPost, setPost,}}>
            <BrowserRouter>
           <Toolbar/>
                <Routes>
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/" element={<AllOffersPage/>} />
                    <Route path="/create" element={<CreateApartmentOfferPage/>} />
                </Routes>
            </BrowserRouter>
        </mainContext.Provider>
    </div>
  );
}

export default App;
