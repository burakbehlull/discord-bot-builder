import axios from 'axios'

const BASE_URL = 'http://localhost:3000'


const createBotRequest = async (endpoint: string, data: Object) => {
    const res : any = await axios.post(`${BASE_URL}/${endpoint}`, data)
    
    return {
        status: res?.status,
        data: res?.data,
        error: res?.error
    }
}

export {
    createBotRequest
}