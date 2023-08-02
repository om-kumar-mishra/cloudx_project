import React from 'react'
import Header from '../../../common/Header'
import Pagetitle from './Pagetitle'
import Newsletter from '../../../common/Newsletter'
import Footer from '../../../common/Footer'
import Servicearea from './Servicearea'
import Servicearealightbox from './Servicearealightbox'
import Gotop from '../../../common/Gotop'

const Images = () => {
    return (
        <>
            <Header />
            <Pagetitle />
            <Servicearea/>
            {/* <Servicearealightbox/> */}
            <Newsletter />
            <Footer />
            <Gotop/>
        </>
    )
}

export default Images