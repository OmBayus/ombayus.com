import axios from "axios"

const url = process.env.REACT_APP_API_URL+"project/" 


const getAll = async ()=>{
      const res = await axios.get(url+"getall?status=true")

      return res.data
}

const add = async (project)=>{
      return axios.post(url+"add",project)
}


const service = {getAll,add}

export default service