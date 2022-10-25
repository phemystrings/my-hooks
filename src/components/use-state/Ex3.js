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
    // just like the last examples
    return (
        <section>
            <h2>Working with Arrays</h2>
            <article>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Add new name here'
                        // this is the current state of the new name
                        value={newName}
                        required
                        // this resets the current state to the value in the text box
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    {/* Note that the submit button is not necessary in this example */}
                    {/* <button>Submit</button> */}
                </form>
                {/* here we display the current values in our database state */}
                {names.map((name, key) => <div key={key}>{key + 1}:  {name}</div>)}
            </article>
        </section>
    )
}

export default Ex3
