import { useState } from 'react'

const Ex4 = () => {
    const data = [
        'Obafemi Showunmi',
        'Novak Djokovic',
        'Cristiano Ronaldo',
        'Maria Sharapova',
        'Aryna Sabalenka',
        'Alexander Zverev',
        'Jaco Pastorius',
        'Fred Hammond',
        'Blake Lively'
    ]
    const [search, setSearch] = useState('')

    return (
        <section>
            <h2>useState SearchBar</h2>
            <article>
                <input
                    type="text"
                    placeholder='Search names'
                    value={search}
                    required
                    onChange={(e) => setSearch(e.target.value)}
                />
                {
                    // note that the filter function only return an array
                    // we have to include another higher order function to map through the array
                    (data.filter((name) => (name.toLowerCase()).includes(search.toLowerCase()))).map((val, key) => <div key={key}>{key + 1} : {val}</div>)
                }
            </article>
        </section>
    )
}

export default Ex4
