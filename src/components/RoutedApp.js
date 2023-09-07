import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import React from 'react'
import App from "../App";

const RoutedApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact="true" element={<App />} />
                <Route path="/create" exact="true" element={<Create />} />
            </Routes>
        </Router>
    )
}

export default RoutedApp