import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import { displayStyle } from '../../styles/DisplayStyles'

const UseContextAPI = () => {
    const { email, setEmail, users } = useContext(DataContext)
    const handleLogout = () => { setEmail('') }

    return (
        <section>
            {email !== '' ? (
                <>
                    <h3>Welcome {email}</h3>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )
                : (<>
                    <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Users List</h3>
                    {!users.length
                        ? (<>
                            <dt className='listBox' style={displayStyle}>No users in the List</dt>
                            <p style={{ marginTop: '0.5rem' }}>New user?
                                <span> <Link to='/dashboard/register'>Register</Link> </span>
                                here
                            </p>
                        </>)
                        : (<>
                            <p>Already a user <Link to='/dashboard/auth'>Login</Link>
                            </p>
                            {
                                users.map((data, key) => {
                                    return (
                                        <dt key={key} style={displayStyle}>{data.email}</dt>
                                    )
                                })
                            }
                        </>
                        )}
                </>
                )}
        </section>
    )
}

export default UseContextAPI
