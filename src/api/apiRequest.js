const apiRequest = async (URL, objOptions, errMsg = null) => {
    const response = await fetch(URL, objOptions)
    try {
        // if (!response.ok) throw Error('url not found')
        if (objOptions.method === 'DELETE' && !response.ok) {
            throw Error('User not found in DB')
        } else if (objOptions.method === 'GET' && !response.ok) {
            throw Error('url not found')
        } else if (objOptions.method === 'POST' && !response.ok) {
            throw Error('Cannot post user')
        }
    } catch (err) {
        errMsg = err.message
    } finally {
        const loadData = await response.json()
        console.log(loadData)
        return { loadData, errMsg }
    }
}

export const postOptions = (newData) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    }
    return options
}

export default apiRequest
