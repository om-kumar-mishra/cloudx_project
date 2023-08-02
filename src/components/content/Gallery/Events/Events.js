import React from 'react'
import Header from '../../../common/Header'
import Newsletter from '../../../common/Newsletter'
import Footer from '../../../common/Footer'
import Pagetitle from './Pagetitle'
import Content from './Content'

const Events = () => {
    return (
        <>
            <Header />
            <Pagetitle />
            <Content />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Events