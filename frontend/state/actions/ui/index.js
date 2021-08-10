export const closeModal = () => {
  return (dispatch) => {
      dispatch({
          type: "CLOSE_MODAL",
      })
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