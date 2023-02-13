import { useDispatch, useSelector } from "react-redux"
import { appStateSlice } from "../redux"

export const useAppState = () => {

    const { openNav } = useSelector( state => state.app )

    console.log(openNav)
    const dispatch = useDispatch()

    const onHandleNav = () => {
        
    }

    return{
        openNav
    }
}