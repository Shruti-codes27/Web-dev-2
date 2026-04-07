import React,{useState} from 'react'

function Article() {
    const [count, setCount] = useState(0)
    const[age, setAge] = useState(0)
    const[name,setName] = useState("Shruti")

    const handleIncrement = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handleIncrementAge = 

    return (
        <div>
            <h2>Article</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Article