import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import React from 'react'
import App from "../App";
import SinglePost from "./SinglePost";

const RoutedApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact="true" element={<App />} />
                <Route path="/create" exact="true" element={<Create />} />
                <Route path="/post/:id" exact="true" element={<SinglePost />} />
            </Routes>
        </Router>
    )
}

export default RoutedApp