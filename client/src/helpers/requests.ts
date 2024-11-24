import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URI


const createBotRequest = async (endpoint: string, data: Object) => {
    const res : any = await axios.post(BASE_URL+endpoint, data)
    
    return {
        status: res?.status,
        data: res?.data,
        error: res?.error
    }
}

export {
    createBotRequest
}