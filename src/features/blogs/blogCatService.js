import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getBlogCats = async () => {
    const response = await axios.get(`${base_url}blogcategory`)
    
    return response.data
}

const blogCatService = { 
    getBlogCats
}

export default blogCatService