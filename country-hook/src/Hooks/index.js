import { useEffect, useState } from "react"
import axios from 'axios'

export const useCountry = (name) => {
    const [country, setCountry] = useState(null)
    const [found, setFound] = useState(false)

    useEffect(() => {
            const baseUrl='https://studies.cs.helsinki.fi/restcountries/api/name'
            const url = `${baseUrl}/${name}`
            axios.get(url)
                .then(response => {
                    console.log('res: ', response)
                    setCountry(response.data)
                    console.log(response.data)
                    setFound(true)
                })
                .catch(error => {
                    console.log(error)
                    setFound(false)
                })
        }, [name])

    return { country, found }
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