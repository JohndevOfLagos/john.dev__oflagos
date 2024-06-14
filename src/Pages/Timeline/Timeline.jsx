import React from 'react'
import "./Timeline.scss"

export const Timeline = () => {
  return (
    <div className='Timeline'>
        <div className="inner-timeline">
        <div className="timeline-head">
          <span>
            Timeline
            <span>.</span>
          </span>
        </div>


        <div className="timeline-list">
            <article className="timeline-item">
                <h4>2022</h4>
                <p>In 2022, I spearheaded the development of innovative web solutions, leveraging cutting-edge technologies like React, Vue.js, and GraphQL. I focused on creating seamless user experiences, optimizing performance, and ensuring robust security measures across all projects.
                </p>
                <span className="number">
                    2
                </span>
            </article>
            <article className="timeline-item">
                <h4>2023</h4>
                <p>
                In 2023, I continued to innovate in web development, leading projects with a focus on accessibility, scalability, and user engagement. Utilizing frameworks like React and Angular, I crafted dynamic interfaces and integrated advanced features to drive client success and satisfaction.
                </p>
                <span className="number">
                   3
                </span>
            </article>
            <article className="timeline-item">
                <h4>2024</h4>
                <p>
                In 2024, I pushed boundaries in web development, harnessing emerging technologies such as machine learning and augmented reality to create immersive online experiences. Leveraging frameworks like React and Next.js, I crafted innovative solutions that set new standards for interactivity and engagement.
                </p>
                <span className="number">
                   4
                </span>
            </article>
        </div>

        </div>
    </div>
  )
}
