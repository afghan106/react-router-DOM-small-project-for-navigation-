import React from 'react';
import "./App.css";
import Header from './components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Home/>
                <Footer/>
                {/* Other components/routes can be added here */}
            </Router>
        </>
    );
}

export default App;