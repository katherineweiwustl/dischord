import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header/Index"
import { useSelector, useDispatch } from "react-redux"
import Modal from "./components/Modal"
import uiActionCreators from "./state/actions/ui"
// bind action creators and give it the dispatch variable
import { bindActionCreators } from "redux"
// import userActionCreators from "./state/action-creators/index"
import Sidebar from "./components/Sidebar"

const App = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state) // takes a callback function
    const isOpen = useSelector(store => store.ui.modalOpen)
    const modalType = useSelector(store => store.ui.modalType)
    const { closeModal } = bindActionCreators(uiActionCreators, dispatch)

    return (
        <>
            {isOpen ? <Modal modalType={modalType} closeModal={closeModal} /> : null}   
            <Header/>
            <Sidebar/>
        </>
    )
}
export default App

// changeUsername("xyz") creates an action, and once it gets to the store it hits the reducers and
    // depending on the type (this time it's changeUsername) it will dispatch the action
    // in a certain reducer that updates the state in the store which gets pushed to the components
// when actions are dispatched they will hit ALL the reducers and chooses