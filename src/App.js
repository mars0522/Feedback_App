import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./components/Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import AboutPage from './Pages/AboutPage';
import FeedbackForm from "./components/FeedbackForm";

import './index.css'


const App = () => {

    const [feedbacks, setFeedback] = useState([]);
    const deleteFeedback = (id) => {

        if (window.confirm('Are You sure you want to delete?')) {
            
            setFeedback(feedbacks.filter(item => item.id !== id));
        }
    }
    const feedbackAddHandler = (newFeedback) => {

        newFeedback.id = uuidv4();

        setFeedback([newFeedback,...feedbacks]);
        
    }
    return (
        <Router>
            <Header />
            <div className="container">
                <FeedbackForm addFeedback={ feedbackAddHandler}/>
                <FeedbackStats feedback={feedbacks} />
                <FeedbackList feedbacks={feedbacks} deleteFeedback={deleteFeedback} />
            </div>
            
        </Router>
    )
}

export default App;