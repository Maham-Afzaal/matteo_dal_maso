import React from 'react'
import SmallFooter from './components/SmallFooter'
import RNavbar from './components/RNavbar'

const LayoutHome = ({children}) => {
  return (
    <div>
        <RNavbar/>
        <main>{children}</main>
        <SmallFooter/>
    </div>
  )
}

export default LayoutHome