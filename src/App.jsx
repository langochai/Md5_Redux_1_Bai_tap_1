import {useState} from 'react'
import './App.css'
import {List} from "./components/List.jsx";

function App() {
    const [show, setShow] = useState(false)
    const handleShow = () =>{
        setShow(!show)
    }
    return (
        <>
            <h3>User list</h3>
            <button onClick={handleShow}>Get users</button>
            {show && <List/>}
        </>
    )
}

export default App
