import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Pagetitle from './Pagetitle'
import Contactinfoarea from './Contactinfoarea'
import Contactarea from './Contactarea'
import Gotop from '../../common/Gotop'

const Contactus = () => {
    return (
        <>
            <Header />
            <Pagetitle />
            <Contactinfoarea/>
            <Contactarea/>
            <Footer />
            <Gotop/>
        </>
    )
}

export default Contactus