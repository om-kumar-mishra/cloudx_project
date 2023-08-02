import React from 'react'
import Header from '../../common/Header'
import Banner from './Banner'
import Whatwedo from './Whatwedo'
import Discoverarea from './Discoverarea'
import Clientsliderarea from './Clientsliderarea'
import Team from './Team'
import Funfacts from './Funfacts'
import Feedback from './Feedback'
import Newsletter from '../../common/Newsletter'
import Footer from '../../common/Footer'
import Gotop from '../../common/Gotop'
import ScrollButton from '../../common/ScrollButton'

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Whatwedo />
            <Discoverarea />
            <Clientsliderarea />
            <Team />
            <Funfacts />
            <Feedback />
            <Newsletter />
            <Footer />
            <Gotop/>
        </>
    )
}

export default Home