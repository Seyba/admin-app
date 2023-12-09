import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getUsers = async () => {
    const response = await axios.get(`${base_url}user/all-users`)

    // if(response.data){
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }
    
    return response.data
}

const customerService = { 
    getUsers
}

export default customerService