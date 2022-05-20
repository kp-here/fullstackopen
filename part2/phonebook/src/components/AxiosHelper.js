import axios from "axios"
const baseUrl = '/api/persons'
const Get = ()=> axios.get(baseUrl).then(res=>res.data)

const Post = newItem=> axios.post(baseUrl,newItem).then(res=>res.data)

const Put = (id,updatedValue) => axios.put(`${baseUrl}/${id}`,updatedValue).then(res=>res.data)

const Delete = id => axios.delete(`${baseUrl}/${id}`).then(res=>res.data)

const AxiosHelper ={Get, Put, Post, Delete}

export default AxiosHelper