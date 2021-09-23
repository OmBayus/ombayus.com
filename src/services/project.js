import axios from "axios"

const url = "https://ombayuscom.herokuapp.com/api/project/" 
// "http://localhost:4000/api/project/"


const getAll = async ()=>{
      const res = await axios.get(url+"getall")

      return res.data
}

const add = async (project)=>{
      return axios.post(url+"add",project)
}


const service = {getAll,add}

export default service