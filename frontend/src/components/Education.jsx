import React from 'react'

const Education = () => {
  return (
    <div>
      <section className="education">
        <h2 id='education'>Education</h2>
        <div className="levels">
            <div className="school">
                <h3>B.Tech in  Mechanical Engineering</h3>
                <p>Vaagdevi College of Engineering</p>
                <p>Year: 2021-2024</p>
                <p>CGPA: 8.1</p>
            </div>
            <div className="school">
                <h3>Diploma in Mechanical Engineering</h3>
                <p>VMR Polytechnic College</p>
                <p>Year: 2018-2021</p>
                <p>CGPA: 8.04</p>
            </div>
            <div className="school">
                <h3>Secondary School Certificate</h3>
                <p>New Raman High School</p>
                <p>Year: 2011-2018</p>
                <p>CGPA: 8.3</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Education
