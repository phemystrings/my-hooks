
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DataProvider } from '../../context/DataContext'
import Auth from './Auth'
import Register from './Register'
import UseContextAPI from './UseContextAPI'

const Dashboard = () => {
    return (
        <DataProvider>
            <main>
                <Routes>
                    <Route path="/">
                        <Route path="/" element={<UseContextAPI />} />
                        <Route path="register" element={<Register />} />
                        <Route path="auth" element={<Auth />} />
                    </Route>
                </Routes>
            </main>
        </DataProvider>
    )
}

export default Dashboard