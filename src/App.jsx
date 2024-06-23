import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import Header from './components/header.jsx';
import About from './pages/about.jsx';
import Footer from './components/footer.jsx';
import AddUser from "./pages/addUser.jsx";
import Login from "./pages/login.jsx";
import CreateMessage from "./pages/createMessage.jsx";
import MessageHistory from "./pages/messageHistory.jsx";
import EditMessage from "./pages/editMessage.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/add-user" element={<AddUser/>}/>
                    <Route path="/login" element={<Login/>}/>
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
                    <Route path="/create-message" element={<>
                        <Header/>
                        <CreateMessage/>
                        <Footer/>
                    </>}/>
                    <Route path="/edit-message" element={<>
                        <Header/>
                        <EditMessage/>
                        <Footer/>
                    </>}/>
                    <Route path="/message-history" element={<>
                        <Header/>
                        <MessageHistory/>
                        <Footer/>
                    </>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
