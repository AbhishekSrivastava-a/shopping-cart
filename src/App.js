import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/:slug" element={<Detail />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
