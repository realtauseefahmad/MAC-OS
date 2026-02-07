import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
                       Backend: Node.js, Express, Python, Django
                       Databases: MongoDB, PostgreSQL, MySQL
                       Tools: Git, Docker, Webpack, Vite
                       Cloud: AWS, Azure, Heroku`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
                       2. E-commerce Platform - MERN Stack
                       3. Task Management App - Next.js
                       4. Real-time Chat App - Socket.io
                       5. Data Dashboard - React + Chart.js`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: ertauseefahmad@gmail.com
                       Phone: +91 7250989719
                       Location: Bhopal, India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/realtauseefahmad', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => ` instagram: real.tauseefahmad
                        LinkedIn: /in/tauseef--ahmad`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
                            ╔════════════════════════════════════════╗
                            ║     Welcome to My Portfolio CLI!       ║
                            ╚════════════════════════════════════════╝
                            
                            Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.
                            
                            Type 'help' to see all available commands, or try:
                              • about     - Learn about me
                              • skills    - View my technical skills
                              • projects  - Check out my work
                              • contact   - Get in touch
                            
                            Happy exploring! 🚀
                            `

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'tauseefahmad:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli