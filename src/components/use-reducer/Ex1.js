import { useReducer } from 'react'

const myData = [
    {
        id: 1,
        username: 'Obafemi',
        pwd: 'Sample1'
    },
    {
        id: 2,
        username: 'Silver',
        pwd: 'Sample1'
    }
]
const reducer = (state, action) => {
    switch (action.type) {
        case 'Load Data': {
            const newData = [...state, { id: 3, username: 'Sampson', pwd: 'Sample1' }]
            return newData
        }
        default: throw Error(`Unknown action type: ${action.type}`)
    }
}

const Ex1 = () => {
    console.log('The program renders')
    const [state, dispatch] = useReducer(reducer, myData)
    const handleSubmit = () => {
        console.log('state: ', state)
        return dispatch({ type: 'Load Data' })
    }
    const displayStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
        padding: '0.5rem',
        marginBottom: '0.2rem',
        width: '200px',
        border: '1px solid black'
    }

    return (
        <article>
            <button onClick={handleSubmit} >
                submit
            </button>
            {state.map((data, key) =>
                <div key={key} style={displayStyle}>
                    <dt>{data.id}</dt>
                    <dt>{data.username}</dt>
                    <dt>{data.pwd}</dt>
                </div>)
            }
        </article>
    )
}

export default Ex1