import React from 'react'
// import Header from '../Header'

import Aboutsection from '../../Aboutsection'
import Catogeryshopheading from '../../Catogeryshopheading'
import Collection from '../../Collection'
import MainHeader from '../../MainHeader'
import Occasion from '../../Occasion'
import Purity from '../../Purity'
import Service from '../../Service'
import Spotted from '../../Spotted'
import Subscribe from '../../Subscribe'
import TrendyCollection from '../../TrendyCollection'
import Footer from '../../footer/Footer'
import Header from '../../Header'
import Navbar from '../../navbar/Navbar'
import Review from '../../Review'
import Contact from '../Contact'

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <MainHeader />
            <Catogeryshopheading />
            <Collection />
            <Contact />

            <Service />
            <TrendyCollection />
            <Occasion />
            <Spotted />
            <Review />
            <Aboutsection />
            <Purity />
            <Subscribe />
            <Footer />


        </>
    )
}

export default Home;
