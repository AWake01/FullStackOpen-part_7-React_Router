import { useState } from "react"

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const resetField = () => {
        setValue('')
    }

    return {    //fieldProps provide all required input props without resetField fuction
        fieldProps: {
            type, value, onChange
        },
        resetField 
    }
}