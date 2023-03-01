import React from 'react'
import { Nav } from 'react-bootstrap'


export default function Nevigetion() {
  return (
    <>
        <Nav
            
            
            >
                <Nav.Item>
                    <Nav.Link href="/">home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/ragister">Register</Nav.Link>
                </Nav.Item>
            </Nav>
    </>
  )
}
