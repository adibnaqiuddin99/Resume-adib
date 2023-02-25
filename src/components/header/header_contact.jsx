import React from 'react'
import {TfiEmail} from 'react-icons/tfi'
import {BiMobileAlt} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {TbBrandLinkedin} from 'react-icons/tb'
import './header.css'

const header_contact = () => {
  return (
    <div className='header__contact'>
        <a href="https://gmail.com" target="_blank"><TfiEmail/></a>naqiuddinadib@gmail.com
        <a href="https://linked.com" target="_blank"><BiMobileAlt/></a>0166050571
        <a href="https://linked.com" target="_blank"><GoLocation/></a>Puchong, Malaysia
        <a href="https://linked.com" target="_blank"><TbBrandLinkedin/></a>linkedin.com/in/adib-naqiuddin

    </div>
  )
}

export default header_contact