import { useReducer } from 'react'
import { displayStyle } from '../../styles/DisplayStyles'
// On submit, we just want to log the results of the input into our console
function reducer(state, action) {
    switch (action.type) {
        case 'loadInputs':
            return { ...state, myData: action.payload }
        case 'changeInput':
            return { ...state, [action.payload.name]: action.payload.value }
        default: throw Error(`Unknown action type: ${action.type.message}`)
    }
}

const myForm = { id: '', username: '', pwd: '' }
const myData = []
const Ex4 = () => {
    // the form object must be destructured to have access to the values
    // the data is an array; hence, we can 
    const [state, dispatch] = useReducer(reducer, { ...myForm, myData })

    const handleSubmit = (e) => {
        e.preventDefault()
        state.id++
        const { myData, ...newItem } = state
        dispatch({
            type: 'loadInputs',
            payload: [...state.myData, newItem]
        })
        state.username = ''
        state.pwd = ''
        e.target.username.focus()
    }

    return (
        <article>
            <form onSubmit={handleSubmit} name='form'>
                <button>Test Reducer</button>
                <input
                    type="text"
                    id='username'
                    placeholder='username'
                    required
                    name='username'
                    value={state.username}
                    onChange={(e) => dispatch({ type: 'changeInput', payload: e.target })}
                />
                <input
                    type="password"
                    placeholder='password'
                    name='pwd'
                    value={state.pwd}
                    onChange={(e) => dispatch({ type: 'changeInput', payload: e.target })}
                />
            </form>
            {!state.myData.length ? (<div style={displayStyle}>Datalist is empty</div>) : (
                state.myData.map((data, key) =>
                    <div key={key} style={displayStyle}>
                        <dt>{data.username}</dt>
                        <dt>{data.id}</dt>
                    </div>))
            }
        </article>
    )
}

export default Ex4