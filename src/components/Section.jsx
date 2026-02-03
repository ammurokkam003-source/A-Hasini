import React from 'react'
import college from '../../public/image/college.jpg'
const Section = () => {
  return (
    <div>
      <section id="Home">
        <div id="image">
       <img src={college} height="500px" width="1400"></img> 
       </div>
      </section>
      <section id="About">
        <h2>ABOUT US</h2>
        <p>Education is the most valuable asset ever, that a parent can give to the child. The vision of VEDA is to impart the best knowledge levels to the students of Konaseema Area with best discipline at Intermediate & Degree level. VEDA TEAM is committed to teach the students with an state of the art technology. Most efficient and qualified faculty members constitute a strongest team to teach at VEDA. The team thrives to give the best effort to fulfil every dream of the parent about the bright future of their children. Serious efforts are made to see that every student of VEDA gets selected for a multinational company right along with the completion of their Degree Course.

Courses Offered</p>
      </section>
      <section id="Courses">
        <h2>COURSES</h2>
        <div id="bca">
            <h2>BCA</h2>
            <p>BCA course is a 3-year UG course that imparts knowledge on the basics of computer application and software development. BCA subjects include database management systems, software engineering, operating systems, web technology and computer languages such as HTML, C, C++, Java.</p>
        </div>
      </section>
      <div id="bsc">
        <h2>BSC</h2>
        <p>Bachelor of Commerce (Computer Applications) broadly covers the essentials and core disciplines of commerce like Economics, Finance, Business Law, etc. along with computer programming, hardware and software development and so on.

</p>
</div>
    </div>
  )
}

export default Section
