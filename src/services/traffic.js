import axios from "axios"

const url = process.env.REACT_APP_API_URL+"traffic/"

const service = async ()=>{

    return axios.post(url+"send")
}

export default service