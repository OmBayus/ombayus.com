import axios from "axios"

const url = process.env.REACT_APP_API_URL+"traffic/"

const service = async ()=>{
    const res = await axios.post(url+"send")

    return res.data
}

export default service