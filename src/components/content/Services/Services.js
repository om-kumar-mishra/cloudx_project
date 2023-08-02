import React from 'react'
import Header from '../../common/Header'
import Pagetitle from './Pagetitle'
import Mainservicesarea from './Mainservicesarea'
import Newsletter from '../../common/Newsletter'
import Footer from '../../common/Footer'
import Gotop from '../../common/Gotop'

const Services = () => {
  return (
    <div>
        <Header/> 
        <Pagetitle/>  
        <Mainservicesarea/>
        <Newsletter/>
        <Footer/>
        <Gotop/>
    </div>
  )
}

export default Services