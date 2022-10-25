import { useReducer } from 'react'
import { displayStyle } from '../../styles/DisplayStyles'

// keep your devtools console open for this sections
// here we hardcode the data
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

// we define a reducer function to update state declared in the useReducer hooks
const reducer = (state, action) => {
    switch (action.type) {
        case 'Load Data': {
            // the spread operator is needed so as not to overwrite the state
            const newData = [...state, { id: 3, username: 'Sampson', pwd: 'Sample1' }]
            return newData
        }
        default: throw Error(`Unknown action type: ${action.type}`)
    }
}

const Ex1 = () => {
    console.log('The program renders')
    // we declare a reduce hook
    // it declare the state and a dispatch function
    // the hooks accepts the reducer function and initial states as parameter
    const [state, dispatch] = useReducer(reducer, myData)

    const handleSubmit = () => {
        console.log('state: ', state)
        return dispatch({ type: 'Load Data' })
    }

    return (
        <section>
            <button onClick={handleSubmit} >
                submit
            </button>
            {state.map((data, key) =>
                <div key={key} className='listBox' style={displayStyle}>
                    <dt>{data.id}</dt>
                    <dt>{data.username}</dt>
                    <dt>{data.pwd}</dt>
                </div>)
            }
        </section>
    )
}

export default Ex1