import React, { useEffect, useRef, useState } from 'react'
import apiRequest from '../../api/apiRequest'
import { postOptions } from '../../api/apiRequest'

const Ex2 = () => {
    const API_URL = 'http://localhost:4500/users'
    const [users, setUsers] = useState([])
    const formData = useRef(new FormData())
    const inputRef = useRef()
    const [fetchError, setFetchError] = useState(null)

    const fetchData = async () => {
        const result = await apiRequest(API_URL, { method: 'GET' })
        result && setFetchError(result.errMsg)
        setUsers(result.loadData)
    }
    // useEffect to initialize the form and set focus to first input on Load
    useEffect(() => {
        formData.current.reset()
        inputRef.current.focus()
    })
    useEffect(() => {
        fetchData()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = (Object.entries(formData.current)).filter(
            a => (a[1].dir === '') && (a[1].localName !== 'button')
        ).reduce((a, b) => {
            a[b[1].name] = b[1].value
            return a
        }, {})

        const result = await apiRequest(API_URL, postOptions(newUser))
        result && setFetchError(result.errMsg)
        setUsers([...users, newUser])
    }
    const deleteUser = async (id) => {
        const result = await apiRequest(`${API_URL}/${id}`, { method: 'DELETE' })
        result && setFetchError(result.errMsg)
        setUsers(users.filter(val => val.id !== id))
    }
    return (
        <article>
            <form
                ref={formData}
                onSubmit={handleSubmit}
            >
                <button>Submit</button>
                <br />
                <input
                    ref={inputRef}
                    name='username'
                    placeholder='username'
                    type="text"
                    required
                />
                <br />
                <input
                    required
                    name='email'
                    placeholder='email'
                    type='email'
                />
            </form>
            <>
                {fetchError ? (<p style={{ color: 'red', background: 'white', padding: '0.5rem', borderRadius: '0.3rem' }}> Error: {fetchError}</p>) : (users.length !== 0) ? (
                    users.map((val, key) =>
                        <div className='listBox' key={key}>
                            <dt>{val.username}</dt>
                            <button onClick={() => deleteUser(val.id)}>+</button>
                        </div>
                    )
                ) : <p style={{ color: 'teal', background: 'white', padding: '0.5rem', borderRadius: '0.3rem', textAlign: 'center' }}>Data List is Empty</p>
                }
            </>
        </article>
    )
}

export default Ex2
