import React,{useState} from "react";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./components/Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import './index.css'


const App = () => {

    const [feedbacks, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {

        if (window.confirm('Are You sure you want to delete?')) {
            
            setFeedback(feedbacks.filter(item => item.id !== id));
        }
   }
    return (
        <div>
            <Header />
            <div className="container">
                
                <FeedbackForm />
                <FeedbackStats feedback={feedbacks} />
                <FeedbackList feedbacks={feedbacks} deleteFeedback={deleteFeedback}/>
                
            </div>
        </div>
    )
}

export default App;