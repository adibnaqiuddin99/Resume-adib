import React from 'react'
import './info.css'

const info = () => {
  return (
    <div className="info">
    <><div className="work_exp">
      <h3>WORK EXPERIENCE</h3>
      <hr></hr>
      <h4>Futurise Sdn Bhd.</h4>
      <p>Intern | September 2022 - December 2022</p>
      <ul>
        <li>Perform a website maintainance on a regular basis, such as keeping the website's content
          up to date to ensure that all information on the website is relevant and accurate. This
          includes adding new blog posts, updating news and media and updating outdated content.</li>
        <li>Oversees several process from business understanding, data preparation to data
          visualization in preparing an impact report.</li>
      </ul>

      <h4>Magic Clean Services</h4>
      <p>Social Media Executive | October 2021 - April 2022</p>
      <ul>
        <li>Develops engaging, creative, innovative content for regularly scheduled posts, which
          enlighten audiences and promote brand-focused messages.</li>
        <li>Oversees all company social media accounts management.</li>
      </ul>

      <h4>Integrated Global Solutions</h4>
      <p>Intern – Cloud Computing Engineer | September 2019 - November 2019</p>
      <ul>
        <li>Assisted troubleshooting software and migrating client virtual server data into the cloud
          during server upgrade.</li>
        <li>Increase productivity by using software to organize, track bug patches and add feature
          requests.</li>
        <li>Collaborate with other engineer to prepare VMWare health check report.</li>
      </ul>
    
    </div><div className="education">
    <h3>EDUCATION</h3>
      <hr></hr>
        <h4>2020 - Present | Universiti Teknologi MARA</h4>
        <p>Bachelor Of Information Systems Intelligent Systems Engineering</p>
        <p>Current CGPA : 3.61</p>

        <h4>2017 - 2020 | Universiti Teknologi MARA</h4>
        <p>Diploma in Science Computer</p>
        <p>CGPA : 3.25</p>

        <div className="soft_skills">
        <h3>SOFT SKILLS</h3>
      <hr></hr>
      <ul>
        <li>Detail-oriented, thorough, and vigilant.</li>
        <li>Competent communicator and confident presenter.</li>
        <li>Team-player who can also work independently.</li>
      </ul>
      </div> 

      </div><div className="tech_skills">
      <h3>TECHNICAL SKILLS</h3>
      <hr></hr>
        <h4>Programming Language</h4>
        <p>Python, SQL, MongoDB, C#, C++, Javascript, HTML, PHP</p>

        <h4>Language</h4>
        <p>Malay (Native or Bilingual Proficiency)</p>
        <p>English (Professional Working Proficiency)</p>

      <div className="personal_project">
      <h3>PERSONAL PROJECT</h3>
      <hr></hr>
      <h4>Sentiment Analysis: Customers Satisfaction Toward Online Food Delivery (OFD) Services
          During COVID-19 in Klang Valley</h4>  
      <ul>
        <li>Perform sentiment analysis based on hybrid approach. The sentiment were extracted using
            two lexicon approaches which are VADER and SentiWordNet.</li>
        <li>Analyze and determine the accuracy and performance of two machine learning
            lassification approaches which are Support Vector Machine and Naive Bayes.</li>
        <li>Display the sentiment analysis results and determine which OFD services is better
            compared to others using Power BI.</li>
      </ul>
      </div> 

      <div className="extracurricular">
      <h3>EXTRACURRICULAR ACTIVITIES & INVOLVEMENT:</h3>
      <hr></hr>
        <h4>Telebort Bootcamp Programme (2019)</h4>
        <p>Became a coding tutor to teach primary school student at SK Merbok Pusat.</p>

        <h4>Delegation to Yogyakarta for Entrepreneurship and Cultural Linkages, Indonesia (2019)</h4>
        <p>Vice director program representing Prosis UiTM Merbok Club delegation to Universitas
          Sarjanawiyata Tamansiswa (UST) in a cultural exchange program.</p>

        <h4>Kayak Teamwork Program for Sambutan Hari Air Sedunia Peringkat Kebangsaan (2019)</h4>
        <p>Joined a kayak team to celebrate World Water Day at Tanjung Dawai, Kedah launched by
          Head of State Government, YB Dato' Seri Utama Haji Mukhriz bin Tun Dr. Mahathir</p>

        <h4>International Competitive Programming & Multimedia Competition (C-PROM) (2018)</h4>
        <p>Representing UiTM Merbok in C++ coding competition.</p>

        <h4>Jump Rope National Competition (2018)</h4>
        <p>Representing Prosis UiTM Merbok Club in national jump rope annual competition
          held at International Islamic University Malaysia (IIUM).</p>

      <div className="references">
      <h3>REFERENCES</h3>
      <hr></hr>
        <h4>Dr Azliza Mohd Ali - Advisor</h4>
        <p>azliza@fskm.uitm.edu.my</p>
        <p>019-872 6432</p>

        <h4>Azrita Abdul Kadir - Head of Ventures & Alliances, Futurise Sdn Bhd</h4>
        <p>azrita@futurise.com.my</p>
        <p>012-238 5664</p>
      </div>

      </div>




       
      </div></>
      </div>
  )
}

export default info