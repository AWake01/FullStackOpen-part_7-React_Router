import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  const getAllInternal = async () => {  //used internaly to fetch all resources
    const response = await axios.get(baseUrl)
    setResources(response.data)
  }

  const getAll = async () => {  //Accessed by service
    const response = await axios.get(baseUrl)
    setResources(response.data)
    return response.data
  }

  const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject)
    setResources(resources.concat(response.data))
    return response.data
  }

  useEffect(() => {
    getAllInternal(baseUrl)  
  }, [useResource])

  const service = {
    getAll,
    create
  }

  return [
    resources, service
  ]
}