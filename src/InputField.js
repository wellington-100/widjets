import { useState } from "react"    // useAbc... <--- hook

const InputField = ({label}) => {
    let [length, setLength] = useState(0)
    return (
        <>
            <input 
                type="text" 
                placeholder={label}

                onKeyUp={(e) => {
                    let value = e.target.value
                    setLength(value.length)
                    console.log(length)
                }}
            />
            {length}
        
        </>
    )
}

export default InputField