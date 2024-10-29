import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "./Layout.scss"

function Layout({children}) {
  return (
    <div className="webPage webPageLayout" >
        <Header/>
        <div className="comp-main">
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout