import { useDispatch, useSelector } from "react-redux";
import { setOpenNav } from "../redux";

export const useAppState = () => {
  const { openNav } = useSelector((state) => state.appState);

  const dispatch = useDispatch();

  const onHandleNav = () => {
    dispatch(setOpenNav(!openNav));
  };

  return {
    openNav,

    onHandleNav,
  };
};
