import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'

export const useDispatchApp = () => useDispatch<AppDispatch>()
export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector
export * from './useCartState'
