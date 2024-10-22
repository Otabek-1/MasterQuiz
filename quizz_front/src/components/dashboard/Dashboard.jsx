import React from 'react'
import "./dashboard.css"
import Nav from './Nav'
import Schedule from './Schedule'
import QuizPerformances from './QuizPerformances'

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Nav />
      <div className="dashboard-main">
        <Schedule />
        <QuizPerformances />
      </div>
    </div>
  )
}
