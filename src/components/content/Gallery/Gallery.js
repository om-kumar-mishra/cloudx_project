import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Newsletter from '../../common/Newsletter'
import Pagetitle from './Pagetitle'
import Content from './Content'
import Gotop from '../../common/Gotop'

const Gallery = () => {
    return (
        <>
            <Header />
            <Pagetitle />
            <Content />
            <Newsletter />
            <Footer />
            <Gotop/>
        </>
    )
}

export default Gallery