import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '../../context/DataContext'

const Register = () => {
    const navigate = useNavigate()
    const {
        email, setEmail, pwd, setPwd, users, setUsers,
        confirmPwd, setConfirmPwd } = useContext(DataContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsers([...users, { email, pwd }])
        setEmail('')
        setPwd('')
        setConfirmPwd('')
        navigate('/dashboard')
        return users
    }
    return (
        <section>
            <h3 style={{ marginBottom: '0.5rem' }}>Register Form</h3>
            <form onSubmit={handleSubmit}>
                <button style={{ backgroundColor: ' turquoise' }}>Submit</button>
                <input
                    type="email"
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='password'
                    name='pwd'
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='confirm Password'
                    name='confirmPwd'
                    value={confirmPwd}
                    onChange={(e) => setConfirmPwd(e.target.value)}
                />
            </form>
            <p>Already have an account: </p>
            <Link to='/dashboard/auth'>Sign in</Link>
        </section>
    )
}

export default Register