
import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { DataProvider } from '../../context/DataContext'
import Auth from './Auth'
import Register from './Register'
import UseContextAPI from './UseContextAPI'

const Dashboard = () => {
    return (
        <main>
            <h3 className='title'>UseContextAPI</h3>
            <DataProvider>
                <Routes>
                    <Route path="/">
                        <Route path="/" element={<UseContextAPI />} />
                        <Route path="register" element={<Register />} />
                        <Route path="auth" element={<Auth />} />
                    </Route>
                </Routes>
            </DataProvider>
            <Link to='/'>Home</Link>
        </main>
    )
}

export default Dashboard