import axios from "axios"

const url = process.env.REACT_APP_API_URL+"product/"


const getAll = async ()=>{
      const res = await axios.get(url+"getall?status=true")

      return res.data
}

const add = async (product)=>{
      return axios.post(url+"add",product)
}


const service = {getAll,add}

export default service