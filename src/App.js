import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Ragister from './pages/Ragister'


export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='login' element={<Login/>}></Route>
                    <Route path='ragister' element={<Ragister/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
