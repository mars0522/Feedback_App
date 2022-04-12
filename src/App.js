import React,{useState} from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import './index.css'

const feedback_array = [];
const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
            <FeedbackItem />
            </div>
        </div>
    )
}

export default App;