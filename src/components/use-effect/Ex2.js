import { useEffect, useState } from 'react'
import apiRequest from '../../api/apiRequest'
import { FaTrashAlt } from 'react-icons/fa'

// here we are creating a Crud application with the useState and useEffect
// you need to install a json-serve package 'npx json-server -data/db.json -p 4500' from your terminal

const Ex2 = () => {
    // without running the json-server as above, this url will not be found
    const API_URL = 'http://localhost:4500/users'
    //here we initialize the database(users) to an empty array
    // the empty array serves two purpose
    // 1. set the initial state to empty array thus display an empty list
    // 2. display the current setState(users) to the UI

    // **** declaring the useState hooks for the crud application ****
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [email, setEMail] = useState('')
    const [fetchError, setFetchError] = useState(null)

    // we create a new user here
    const createUser = async (e) => {
        e.preventDefault()
        // the id may not be necessary for a json-serve
        const id = users.length ? users[users.length - 1].id + 1 : 1
        const newUser = { id, username, email }
        setUsers([...users, newUser])//we update the database with new user

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        // call the imported apiRequest 
        // it returns two results: the data and the error message
        const result = await apiRequest(API_URL, postOptions)

        if (result.errMsg) setFetchError(result.errMsg)
        // console.log(result.errMsg)

        // we re-initialize the form state
        setEMail('')
        setUsername('')
    }

    // delete user
    const deleteUser = async (id) => {
        const deleteOptions = {
            method: 'DELETE'
        }
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers([...filteredUsers])
        const result = await apiRequest(`${API_URL}/${id}`, deleteOptions)
        if (result) return setFetchError(result)

    }
    // we create a useEffect to load the data from the API url
    // the useEffect reloads every time there is a change or interference in the fetchError

    useEffect(() => {
        const fetchData = async () => {
            // we are directly fetching the data here using fetch
            // you can also use axios to fetch data
            const response = await fetch(API_URL)
            try {
                if (!response.ok) throw Error('url not found.')
                const userList = await response.json()
                setUsers(userList)
                setFetchError(null)
            } catch (err) {
                setFetchError(err.message)
            }
        }
        fetchData()
    }, [fetchError])
    return (
        <section>
            <form onSubmit={createUser}>
                <button>Submit</button>
                <input
                    placeholder='Username'
                    id='username'
                    type='text'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    id='email'
                    placeholder='email'
                    type='text'
                    required
                    value={email}
                    onChange={(e) => setEMail(e.target.value)}
                />
            </form>
            <>
                {(fetchError) && <p className='listBox' style={{ color: 'brown' }}>{`Error: ${fetchError}`}</p>}
                {users.map((val, key) =>
                    <div className='listBox' key={key}
                        style={{ width: '80%' }}
                    >
                        <dt>{val.username}</dt>
                        {/* <button onClick={() => deleteUser(val.id)}>+</button> */}
                        <FaTrashAlt
                            onClick={() => deleteUser(val.id)}
                            className='trashBtn' />
                    </div>
                )}
            </>
        </section>
    )
}

export default Ex2
