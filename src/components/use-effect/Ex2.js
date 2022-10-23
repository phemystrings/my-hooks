import { useEffect, useState } from 'react'
import apiRequest from '../../api/apiRequest'

const Ex2 = () => {
    const API_URL = 'http://localhost:4500/users'
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [email, setEMail] = useState('')
    const [fetchError, setFetchError] = useState(null)

    const createUser = async (e) => {
        e.preventDefault()
        const id = users.length ? users[users.length - 1].id + 1 : 1
        const newUser = { id, username, email }
        setUsers([...users, newUser])

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        const result = await apiRequest(API_URL, postOptions)
        if (result.errMsg) setFetchError(result.errMsg)
        // console.log(result.errMsg)
        setEMail('')
        setUsername('')
    }
    const deleteUser = async (id) => {
        const deleteOptions = {
            method: 'DELETE'
        }
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers([...filteredUsers])
        const result = await apiRequest(`${API_URL}/${id}`, deleteOptions)
        if (result) setFetchError(result)
        console.log(users)

    }
    // let's create a useEffect to load the data from the API
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(API_URL)
                if (!response.ok) throw Error('Did not receive the expected data.')
                const userList = await response.json()
                console.log(userList)
                setUsers(userList)
                setFetchError(null)
            } catch (err) {
                setFetchError(err.message)
            }
        }
        fetchData()
    }, [])
    return (
        <article>
            <form onSubmit={createUser}>
                <button>Submit</button>
                <article>
                    <input
                        placeholder='Username'
                        id='username'
                        type='text'
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </article>
                <article>

                    <input
                        id='email'
                        placeholder='email'
                        type='text'
                        required
                        value={email}
                        onChange={(e) => setEMail(e.target.value)}
                    />
                </article>
            </form>
            <>
                {(fetchError !== null) && <p style={{ color: 'brown' }}>{`Error: ${fetchError.message}`}</p>}
                {users.map((val, key) =>
                    <div className='listBox' key={key}>
                        <dt>{val.username}</dt>
                        <button onClick={() => deleteUser(val.id)}>+</button>
                    </div>
                )}
            </>
        </article>
    )
}

export default Ex2
