import React from 'react'
import {TfiEmail} from 'react-icons/tfi'
import {BiMobileAlt} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {TbBrandLinkedin} from 'react-icons/tb'
import './contact.css'

const Contact = () => {
  return (

    <div className='contact_container'>
        <ul><TfiEmail/>naqiuddinadib@gmail.com</ul>
        <ul><BiMobileAlt/>0166050571</ul>
        <ul><GoLocation/>Puchong, Malaysia</ul>
        <ul><TbBrandLinkedin/>linkedin.com/in/adib-naqiuddin</ul>
    </div>
  )
}

export default Contact