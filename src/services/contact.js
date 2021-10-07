import axios from "axios"

const url = process.env.REACT_APP_API_URL+"contact/"


const getAll = async ()=>{
      const res = await axios.get(url+"getall")

      return res.data
}

const sendMsg = async (contact)=>{
      return axios.post(url+"sendMsg",contact,{
            withCredentials: true
      })

      
}


const service = {getAll,sendMsg}

export default service