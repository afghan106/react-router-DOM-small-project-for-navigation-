import React from 'react';
import "./App.css";
import Header from './components/header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Header />
                {/* Other components/routes can be added here */}
            </Router>
        </>
    );
}

export default App;