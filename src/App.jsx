import React from 'react'
import MainHeader from './components/MainHeader.jsx'
import { BrowserRouter, Routes, Route, Router, HashRouter } from 'react-router-dom'
import Catogeryshopheading from './components/Catogeryshopheading.jsx'
import Collection from './components/Collection.jsx'
import Service from './components/Service.jsx'
import TrendyCollection from './components/TrendyCollection.jsx'
import Occasion from './components/Occasion.jsx'
import Spotted from './components/Spotted.jsx'
import Review from './components/Review.jsx'
import Aboutsection from './components/Aboutsection.jsx'
import Purity from './components/Purity.jsx'
import Subscribe from './components/Subscribe.jsx'
import Nacklece from './components/pages/Necklece'
import Bracelet from './components/pages/Bracelet';
import Ring from './components/pages/Ring';
import Earrings from './components/pages/Earrings';
import Ankle from './components/pages/Ankle.jsx'
import Allpages from './components/pages/Allpages.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Contact from './components/pages/Contact.jsx'
import Home from './components/pages/home/Home.jsx'

const App = () => {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Nacklece' element={<Nacklece />} />
          <Route path='/Bracelet' element={<Bracelet />} />
          <Route path='/Ring' element={<Ring />} />
          <Route path='/Earrings' element={<Earrings />} />
          <Route path='/Ankle' element={<Ankle />} />
          <Route path='/Allpages' element={<Allpages />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>

      </HashRouter>




    </div>
  )
}

export default App