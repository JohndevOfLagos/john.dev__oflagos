

import React from 'react'
import "./WhatTheySayAboutMe.scss"

export const WhatTheySayAboutMe = () => {
  return (
    <div className='WhatTheySayAboutMe'>
        <div className="inner-whattheysayaboutme">

        <div className="whattheysayaboutme-head">
          <span>
            What They Say About Me
            <span>.</span>
          </span>
        </div>

           <div className="whattheysay-list">
            <article className='whattheysay-card'>
                <h4>Obi Codeman</h4>
                <span>Software Engineer</span>
                <p>One of the greatest web developers I've worked with is John. He created my website within the Pencredit, and everything is in good working order. I feel completely at ease when he manages any of my projects.</p>
            </article>
            <article className='whattheysay-card'>
                <h4>Apetu Ezekiel</h4>
                <span>Software Engineer</span>
                <p>I appreciate John's commitment to hard effort. No matter how large the project, he is ready to make your ideas a reality. He is really talented at reacting, and I also picked up a few things from him.
                 </p>
            </article>
            <article className='whattheysay-card'>
                <h4>Olisa Emeka</h4>
                <span>Student</span>
                <p> had trouble understanding front-end web development, but once I met John, he helped me understand it all. He is a terrific teacher—the finest, if I may say—and I have no doubt that I will someday emulate him.</p>
            </article>
           </div>

        </div>
    </div>
  )
}
