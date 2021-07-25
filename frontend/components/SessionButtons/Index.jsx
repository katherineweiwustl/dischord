import React, {useState} from "react"
import SessionModal from "../SessionModal/Index"

const SessionButtons = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    // when we first render, isOpen (a state) is set to false
    // when we want to CHANGE the state of isOpen, we use setIsOpen (provided to use by useState) to set isOpen

    return (
        <div>
            { isOpen ? <SessionModal setIsOpen={setIsOpen} /> : null }
            <form onSubmit={ (e) => e.preventDefault()}>
                <button onClick={() => setIsOpen(true)}>sign up</button>
                <button>sign in</button>
                <button>sign out</button>
            </form>
        </div>
    )
}
export default SessionButtons 