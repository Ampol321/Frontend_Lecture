import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Create from "./Create";
import React from 'react'
import App from "../App";

const RoutedApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/create" exact="true" element={<App/>}></Route>
                <Route path="/create" exact="true" element={<Create/>}></Route>
            </Routes>
        </Router>
    )
}

export default RoutedApp