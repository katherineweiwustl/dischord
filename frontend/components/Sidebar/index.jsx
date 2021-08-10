import React, {useState} from "react"
import { Container, StyledButton } from "./Style"
import ServerForm from "../ServerForm"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import uiActionCreators from "../../state/actions/ui"

const Sidebar = () => {
    const dispatch = useDispatch()
    const { openModal } = bindActionCreators(uiActionCreators, dispatch)


    return (
        <>
            <Container>
                <StyledButton onClick={() => openModal('createServer')}>
                    +
                </StyledButton>
            </Container>
        </>
    )
}
export default Sidebar 