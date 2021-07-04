import * as React from "react"
import {useState} from 'react'
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <> 
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle}  />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
