import axios from "axios"

const url = "http://localhost:4000/api/product/"


const getAll = async ()=>{
      const res = await axios.get(url+"getall")

      return res.data
}

const add = async (product)=>{
      return axios.post(url+"add",product)
}


const service = {getAll,add}

export default service