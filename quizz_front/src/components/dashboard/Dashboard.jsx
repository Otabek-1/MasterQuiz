import React from 'react'
import "./dashboard.css"
import Nav from './Nav'
import Schedule from './Schedule'
import QuizPerformances from './QuizPerformances'
import Notifications from './Notifications'
import Lessons from './Lessons'

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Nav />
      <div className="dashboard-main">
        <Schedule />
        <QuizPerformances />
        <Notifications />
        <Lessons />
      </div>
    </div>
  )
}
