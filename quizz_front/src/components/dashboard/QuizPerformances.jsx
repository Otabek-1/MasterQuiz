import React from 'react';
import "./dashboard.css"

const QuizPerformances = () => {
    return (
        <div className='performances-box'>
            <div className="per-title">Quizzes schedule</div>
            <div className="schedule-table-names">
                <div className="table-name" style={{ "padding-right": "150px" }}>Quiz name</div>
                <div className="table-name" style={{ "padding-right": "40px" }}>Starts at</div>
                <div className="table-name" style={{ "padding-right": "30px" }}>Status</div>
                <div className="table-name">Participants</div>
            </div>
            <div className="quizzes-table">
                <div className="quiz">
                    <span className="quizName">History of World War II</span>
                    <span className="when-starts">Today</span>
                    <span className="status">Not started</span>
                    <span className="participants">45</span>
                    <div className="button">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>

                <div className="quiz">
                    <span className="quizName">History of World War II</span>
                    <span className="when-starts">Today</span>
                    <span className="status">Not started</span>
                    <span className="participants">45</span>
                    <div className="button">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>

                <div className="quiz">
                    <span className="quizName">History of World War II</span>
                    <span className="when-starts">Today</span>
                    <span className="status">Not started</span>
                    <span className="participants">45</span>
                    <div className="button">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>

                <div className="quiz">
                    <span className="quizName">History of World War II</span>
                    <span className="when-starts">Today</span>
                    <span className="status">Not started</span>
                    <span className="participants">45</span>
                    <div className="button">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default QuizPerformances;
