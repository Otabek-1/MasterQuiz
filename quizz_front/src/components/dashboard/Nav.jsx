import React from 'react';
import "./dashboard.css";
import "../../fontawesome-free-6.6.0-web/css/all.css";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <div className="logo">
                <a href="#!" className="logo-link">
                    <div className="logo-icon">
                        <div className="line"></div>
                        <div className="line1"></div>
                    </div>
                    <span className="logo-text">QuizMaster</span>
                </a>
            </div>

            <ul className="nav-list">
                <li className="nav-list-item">
                    <Link href="#!" className="nav-list-item-link">Home</Link>
                </li>
                <li className="nav-list-item">
                    <Link href="#!" className="nav-list-item-link">Quizzes</Link>
                </li>
                <li className="nav-list-item">
                    <Link href="#!" className="nav-list-item-link">Leaderboard</Link>
                </li>
                <li className="nav-list-item">
                    <Link href="#!" className="nav-list-item-link">Analytics</Link>
                </li>
                <li className="icon-link" style={{"display":"flex", "column-gap":"16px"}}>
                    <a href="#!" className="profile-link">
                        <i className="fas fa-user"></i>
                    </a>
                    <a href="#!" className="profile-link">
                        <i className="fas fa-cog cog"></i>
                    </a>

                </li>
            </ul>
        </div>
    );
}

export default Nav;
