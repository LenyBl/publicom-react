// src/App.js
import React, {useContext} from 'react';
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
import UserProvider from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/add-user" element={<AddUser/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/" element={
                            <ProtectedRoute>
                                <>
                                    <Header/>
                                    <Home/>
                                    <Footer/>
                                </>
                            </ProtectedRoute>
                        }/>
                        <Route path="*" element={<h1>Not Found</h1>}/>
                        <Route path="/about" element={
                            <>
                                <Header/>
                                <About/>
                                <Footer/>
                            </>
                        }/>
                        <Route path="/create-message" element={
                            <ProtectedRoute>
                                <>
                                    <Header/>
                                    <CreateMessage/>
                                    <Footer/>
                                </>
                            </ProtectedRoute>
                        }/>
                        <Route path="/edit-message" element={
                            <ProtectedRoute>
                                <>
                                    <Header/>
                                    <EditMessage/>
                                    <Footer/>
                                </>
                            </ProtectedRoute>
                        }/>
                        <Route path="/message-history" element={
                            <ProtectedRoute>
                                <>
                                    <Header/>
                                    <MessageHistory/>
                                    <Footer/>
                                </>
                            </ProtectedRoute>
                        }/>
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
