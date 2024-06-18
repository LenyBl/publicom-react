import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import Header from './components/header.jsx';
import About from './pages/about.jsx';
import Footer from './components/footer.jsx';
import AddUser from "./pages/addUser.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/add-user" element={<AddUser/>}/>
                    <Route path="/" element={<>
                        <Header/>
                        <Home/>
                        <Footer/>
                    </>}/>
                    <Route path="*" element={<h1>Not Found</h1>}/>
                    <Route path="/about" element={<>
                        <Header/>
                        <About/>
                        <Footer/>
                    </>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
