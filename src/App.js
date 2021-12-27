import React from 'react';
import Foods from "./components/Foods";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Info from "./components/Info";
import Header from "./components/Header";
import Listfood from "./components/Listfood";
// import {Navigate} from "react-router-dom";
import Products from "./components/Products";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/search/:name" element={<Listfood/>}/>
                <Route path="/" element={<Foods/>}/>
                <Route path="/food/:id" element={<Info/>}/>
                <Route path="/product/:name" element={<Products/>}/>
                <Route path="*" element="404 not found"/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;