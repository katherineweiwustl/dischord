



export const closeModal = () => {
  return {
        type: "CLOSE_MODAL",
    }
}

export const openModal = (modalType) => {
  return (dispatch) => {
      dispatch({
          type: "OPEN_MODAL",
          payload: modalType
      })
  }
}

export default {
  closeModal,
  openModal
}