import axios from 'axios'

const ENDPOINT = "http://localhost:5000"

export const getProducts = async () => {
    const res = await axios.get(`${ENDPOINT}/inventory`)
    return res.data
}