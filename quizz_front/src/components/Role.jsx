import React, { useState } from 'react';
import teacherIcon from "../img/icon-teacher-role.png";
import studentIcon from "../img/icon-student-role.png";

export default function Role() {
    const [role, setRole] = useState(null);

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Choose your role</h3>
            <div className="role-cards">
                <div className="role-card" onClick={() => setRole("teacher")}>
                    <img src={teacherIcon} alt="Teacher icon role" />
                    <span className='role-name'>Teacher</span>
                    <p>Create class, test them, teach them...</p>
                </div>

                <div className="role-card" onClick={() => setRole("student")}>
                    <img src={studentIcon} alt="Student icon role" />
                    <span className='role-name'>Student</span>
                    <p>Explore classes, join one of them you like and learn...</p>
                </div>
            </div>

        </div>
    );
}
