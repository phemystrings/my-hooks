import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '../../context/DataContext'

const Auth = () => {
    const { email, setEmail, pwd, setPwd } = useContext(DataContext)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        setPwd('')
        navigate('/dashboard')
    }
    return (
        <section>
            <h3 style={{ marginBottom: '0.5rem' }}>Login Form</h3>
            <form onSubmit={handleLogin}>
                <button style={{ backgroundColor: 'turquoise' }}>Login</button>
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
            </form>
            <p>New user?
                <span> <Link to='/dashboard/register'>Register</Link> </span>
                here
            </p>
        </section>
    )
}

export default Auth