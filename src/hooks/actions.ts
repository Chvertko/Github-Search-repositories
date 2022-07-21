import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { gtiHubActions } from "../store/gitHub/gitHub.slice"

const actions = {
    ...gtiHubActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}