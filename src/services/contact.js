import axios from "axios"
import Cookies from "js-cookie"

const url = process.env.REACT_APP_API_URL+"contact/"


const getAll = async ()=>{
      const res = await axios.get(url+"getall")

      return res.data
}

const sendMsg = async (contact)=>{
      return axios.post(url+"sendMsg",{...contact,msg:Cookies.get('msg')})
}


const service = {getAll,sendMsg}

export default service