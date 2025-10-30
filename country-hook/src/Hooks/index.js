import { useEffect, useState } from "react"
import axios from 'axios'

export const useCountry = (name) => {
    const [data, setData] = useState(null)
    const [found, setFound] = useState(false)

    useEffect(() => {
            const baseUrl='https://studies.cs.helsinki.fi/restcountries/api/name'
            const url = `${baseUrl}/${name}`
            axios.get(url)
                .then(response => {
                    setData(response.data)
                    setFound(true)
                })
                .catch(error => {
                    console.log(error)
                    setFound(false)
                })
        }, [name])

    return { data, found }
}

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}