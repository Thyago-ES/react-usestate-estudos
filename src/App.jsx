import Home from "./pages/Home";
import Login from "./pages/Login";
import Logged from "./pages/Logged";

import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
    const [username, setUsername] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const handleUser = (name) => {
        if (name) {
            setUsername(name);
        }
    };

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleIsLogged = (value) => {
        setIsLogged(value);
    };

    console.log(isLogged);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <Login
                            username={handleUser}
                            setIsLogged={handleIsLogged}
                        />
                    }
                />
                <Route
                    path="/logged"
                    element={<Logged username={username} logout={isLogged} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
