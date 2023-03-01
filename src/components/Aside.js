import React from 'react'
import { Col } from 'react-bootstrap'

export default function Aside(props) {
  return (
    <>
        <Col className='r_tbdr col-3'> <aside>{props.children}</aside></Col>
    </>
  )
}
