import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'
const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
        <div className="resume-window">
            <iframe src="/DummyResume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume
