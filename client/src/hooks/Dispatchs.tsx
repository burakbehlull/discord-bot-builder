import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth } from '../store/slices/authSlice'
import { AppDispatch, RootState } from '../store'

const useDispatchs = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleIsAuth = (status: boolean) => {
    dispatch(setIsAuth(status))
  }
  const IsAuthValue = () => {
    return useSelector((state: RootState) => state.auth.isAuth)
  }

  return {
    handleIsAuth,
    IsAuthValue

  }
}

export default useDispatchs
