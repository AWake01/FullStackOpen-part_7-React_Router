import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCountry, useField } from './Hooks'

const Country = ({ country, found }) => {
  console.log('country: ', country)

  if (!country) {
    return null
  }

  if (!found) {
    return (
      <div>
        not found...
      </div>
    )
  }

  return (
    <div>
      {console.log(country)}
      <h3>{country.name.common} </h3>
      <div>capital {country.capital} </div>
      <div>population {country.population}</div> 
      <img src={country.flags.png} height='100' alt={`flag of ${country.name.common}`}/>  
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
    //console.log(name)
    //country.country = country.findCountry(name)
    //console.log(country.country)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country.data} found={country.found} />
    </div>
  )
}

export default App