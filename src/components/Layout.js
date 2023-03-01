import React from 'react'
import {  Container,  Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <>
        <Header/>
        <main>
            <Container fluid className='h-100'>
                <Row className='h-100'>
                    <Aside>left aside</Aside>
                    <Outlet/>
                    <Aside>right aside</Aside>
                </Row>
            </Container> 
        </main>
        <Footer/>
    </>
  )
}

export default Layout