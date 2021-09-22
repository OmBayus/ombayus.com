import axios from "axios"

const url = "http://localhost:4000/api/contact/"


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