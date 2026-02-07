import React from 'react'
import './doc.scss'

const Doc = ({ windowsState, setWindowsState }) => {
  return (
    <>
    <footer className='doc'>
        <div
          onClick={() => { setWindowsState(state => ({ ...state, github: true })) }}
          className='icon github'><img src="/Doc-icons/github.svg" alt="" /></div>
        <div 
         onClick={() => { setWindowsState(state => ({ ...state, note: true })) }}
         className='icon note'><img src="/Doc-icons/note.svg" alt="" /></div>
        <div 
          onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}
          className='icon pdf'><img src="/Doc-icons/pdf.svg" alt="" /></div>
        <div 
          onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
          className='icon calender'><img src="/Doc-icons/calender.svg" alt="" /></div>
        <div 
          onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }}
          className='icon spotify'><img src="/Doc-icons/spotify.svg" alt="" /></div>
        <div
         onClick={()=>{window.open("mailto:ertauseefahmad@gmail.com","_blank")}}
         className='icon mail'><img src="/Doc-icons/mail.svg" alt="" /></div>
        <div
         onClick={()=>{window.open("https://www.linkedin.com/in/tauseef--ahmad/","_blank")}}
         className='icon link'><img src="/Doc-icons/link.svg" alt="" /></div>
        <div
          onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }}
         className='icon cli'><img src="/Doc-icons/cli.svg" alt="" /></div>
    </footer>
    </>
  )
}

export default Doc
