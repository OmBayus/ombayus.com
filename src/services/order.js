import axios from "axios"

const url = process.env.REACT_APP_API_URL+"order/"


const pay = async (order)=>{
      return axios.post(url+"pay",order)
}

const checkout = async (id)=>{
      return axios.post(url+"checkout",{order:id})
}


const service = {pay,checkout}

export default service