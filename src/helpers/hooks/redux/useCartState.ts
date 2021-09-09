import { useCallback } from 'react'
import {
  addToCart,
  decrementCartQuantity,
  emptyCart,
  getAllCart,
  getTotalAmount,
  getTotalQty,
  incrementCartQuantity,
  removeFromCart,
} from '../../../store/slices/cart'
import { useDispatchApp, useSelectorApp } from '.'

export const useCartState = () => {
  const allCart = useSelectorApp(getAllCart)
  const totalCartQty = useSelectorApp(getTotalQty)
  const totalAmount = useSelectorApp(getTotalAmount)
  return {
    allCart,
    totalCartQty,
    totalAmount,
  }
}

export const useCartAction = () => {
  const dispatch = useDispatchApp()
  const addItemToCart = useCallback(
    (id: string) => dispatch(addToCart({ id })),
    [dispatch],
  )
  const removeItemFromCart = useCallback(
    (id: string) => dispatch(removeFromCart({ id })),
    [dispatch],
  )
  const incrementCartItem = useCallback(
    (id: string) => dispatch(incrementCartQuantity({ id })),
    [dispatch],
  )
  const decrementCartItem = useCallback(
    (id: string) => dispatch(decrementCartQuantity({ id })),
    [dispatch],
  )
  const clearCart = useCallback(() => dispatch(emptyCart()), [dispatch])
  return {
    clearCart,
    addItemToCart,
    removeItemFromCart,
    incrementCartItem,
    decrementCartItem,
  }
}
