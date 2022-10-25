import React, { useEffect, useRef, useState } from 'react'
import apiRequest from '../../api/apiRequest'
import { postOptions } from '../../api/apiRequest'
import { FaTrashAlt } from 'react-icons/fa'

// in this example, we are using the useState, useEffect and useRef for our crud operations

const Ex2 = () => {
    const API_URL = 'http://localhost:4500/users'
    const [users, setUsers] = useState([])
    const formData = useRef(new FormData())
    const inputRef = useRef()
    // this will trigger reloads, hence, we reset it in our Crud functions
    const [fetchError, setFetchError] = useState(null)

    const fetchData = async () => {
        const result = await apiRequest(API_URL, { method: 'GET' })
        result && setFetchError(result.errMsg)
        setUsers(result.loadData)
    }
    // useEffect to initialize the form and set focus to first input on every reload Load
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
        // we manually reload the data so as to synchronize with the state
        // the useEffect runs only when the page mounts
        // the fetchData reloads the data manually
        fetchData()
    }
    const deleteUser = async (id) => {
        const result = await apiRequest(`${API_URL}/${id}`, { method: 'DELETE' })
        result && setFetchError(result.errMsg)
        setUsers(users.filter(val => val.id !== id))
        fetchData()
    }
    return (
        <section>
            <form
                ref={formData}
                onSubmit={handleSubmit}
            >
                <button>Submit</button>
                <input
                    ref={inputRef}
                    name='username'
                    placeholder='username'
                    type="text"
                    required
                />
                <input
                    required
                    name='email'
                    placeholder='email'
                    type='email'
                />
            </form>
            <>
                {fetchError ? (<p className='listBox' style={{ width: '80%', color: 'red', background: 'white', padding: '0.5rem', borderRadius: '0.3rem' }}> Error: {fetchError}</p>) : (users.length !== 0) ? (
                    users.map((val, key) =>
                        <div className='listBox' style={{ width: '80%' }} key={key}>
                            <dt>{val.username}</dt>
                            <FaTrashAlt
                                className='trashBtn'
                                onClick={() => deleteUser(val.id)}
                            />
                        </div>
                    )
                ) : <p className='listBox' style={{ color: 'teal', background: 'white', padding: '0.5rem', borderRadius: '0.3rem', textAlign: 'center', width: '80%' }}>Data List is Empty</p>
                }
            </>
        </section>
    )
}

export default Ex2
