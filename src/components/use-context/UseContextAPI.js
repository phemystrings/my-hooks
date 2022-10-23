import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import { displayStyle } from '../../styles/DisplayStyles'

const UseContextAPI = () => {
    const { email, setEmail, users } = useContext(DataContext)
    const handleLogout = () => { setEmail('') }

    return (
        <>
            <h3>UseContextAPI</h3>
            <section>
                {email !== '' ? (
                    <>
                        <h3>Welcome {email}</h3>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )
                    : (<article>
                        <h3>Users List</h3>
                        {!users.length
                            ? (<>
                                <dt style={displayStyle}>No users in the List</dt>
                                <p>New user?
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
                    </article>
                    )}

            </section>
            <Link to='/'>Home</Link>
        </>
    )
}

export default UseContextAPI
