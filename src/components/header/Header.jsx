import React from 'react'
import './header.css'
import Adib from '../../assets/adib_50.png'
import {TfiEmail} from 'react-icons/tfi'
import {BiMobileAlt} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {TbBrandLinkedin} from 'react-icons/tb'

const Header = () => {
  return (
    <><div class="container">
      <div class="profile">
        <div class="profile_container">
          <div>
            <h1 className="profile_name">Adib Naqiuddin</h1>
            <p className="profile_title">Data Analyst</p>
            <p className="profile_description">
              Solution-oriented and problem solver with progressive experience in collecting, organizing, interpreting, and dissemanting
              various type of statistical figures. Highliy skilled in communication, collaboration, and eager to
              offer superb analytical and computer skills.
            </p>
          </div>
          <div className="profile_img">
            <img src={Adib} alt="Adib" height={180} width={180} />
          </div>
        </div>
      </div>
    </div>
    </>  

    

    
  )
}

export default Header