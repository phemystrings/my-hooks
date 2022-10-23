import { useState } from 'react'

const Ex3 = () => {
    // ****This will preload data****
    // const data = ['Obafemi', 'Samuel', 'Strong', 'Fabian', 'Mohammed', 'Joseph']
    // const [names, setNames] = useState(data)
    // *****end of data preload

    const [names, setNames] = useState([])//This is the database state
    const [newName, setNewName] = useState('')//This is the new user state

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(newName.replace(/\s/g, ''))
        newName.trim() !== '' && setNames([...names, newName])
        setNewName('')
    }
    return (
        <section>
            <h2>useState and Arrays</h2>
            <article>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Add new name here'
                        value={newName}
                        required
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    {/* Note that the submit button is not necessary in this example */}
                    {/* <button>Submit</button> */}
                </form>
                {names.map((name, key) => <div key={key}>{key + 1}:  {name}</div>)}
            </article>
        </section>
    )
}

export default Ex3
