import React from 'react'
import "./ResumeView.scss"
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import ResumeImage from "Assets/image/John-Adewunmi-CV-page-001.jpg"

export const ResumeView = () => {
    const navigate = useNavigate()


    const toggleCloseResumeView = () => {
        navigate("/Home/resume")

    }

  return (
    <div className='ResumeView'>
        <header className='resume-view-header'>
            <h4>
            John-Adewunmi-CV.pdf
            </h4>
            <button onClick={toggleCloseResumeView}>
            <Icon icon="iconoir:cancel" />
            </button>
        </header>
        <div className="view-image">
            <img src={ResumeImage} alt="" />
        </div>
    </div>
  )
}
