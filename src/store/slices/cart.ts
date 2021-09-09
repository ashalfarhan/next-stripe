import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { CartItem } from '../../@types'
import { AppStorage } from '../../helpers'
import { dummyProducts } from '../../mocks'

interface CartState {
  cart: CartItem[]
}

const initialState: CartState = {
  cart: AppStorage.getItem('chams_cart') || [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<{ id: string }>) => {
      const alreadyInCart = state.cart.find(
        (product) => product.id === payload.id,
      )
      if (alreadyInCart) {
        const added = state.cart.map((data) => {
          if (data.id === payload.id) {
            return {
              ...data,
              quantity: data.quantity + 1,
            }
          }
          return data
        })
        AppStorage.setItem('chams_cart', added)
        return {
          ...state,
          cart: added,
        }
      }
      const item = dummyProducts.find(({ id }) => id === payload.id)
      if (item) {
        const newItem = { ...item, quantity: 1 }
        const added = [...state.cart, newItem]
        AppStorage.setItem('chams_cart', added)
        return {
          ...state,
          cart: added,
        }
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<{ id: string }>) => {
      const filtered = state.cart.filter(({ id }) => id !== payload.id)
      AppStorage.setItem('chams_cart', filtered)
      return {
        ...state,
        cart: filtered,
      }
    },
    incrementCartQuantity: (
      state,
      { payload }: PayloadAction<{ id: string }>,
    ) => {
      const afterInc = state.cart.map((data) => {
        if (data.id === payload.id) {
          return {
            ...data,
            quantity: data.quantity + 1,
          }
        }
        return data
      })
      AppStorage.setItem('chams_cart', afterInc)
      return {
        ...state,
        cart: afterInc,
      }
    },
    decrementCartQuantity: (
      state,
      { payload }: PayloadAction<{ id: string }>,
    ) => {
      const afterInc = state.cart.map((data) => {
        if (data.id === payload.id) {
          if (data.quantity > 1) {
            return {
              ...data,
              quantity: data.quantity - 1,
            }
          }
        }
        return data
      })
      AppStorage.setItem('chams_cart', afterInc)
      return {
        ...state,
        cart: afterInc,
      }
    },
    emptyCart: (state) => {
      AppStorage.removeItem('chams_cart')
      return {
        ...state,
        cart: [],
      }
    },
  },
})

export const getCartState = (state: RootState) => state.cart

export const getAllCart = (state: RootState) => state.cart.cart

export const getTotalQty = (state: RootState) => {
  return state.cart.cart.reduce((prev, next) => {
    return prev + next.quantity
  }, 0)
}

export const getTotalAmount = (state: RootState) => {
  return state.cart.cart.reduce((prev, next) => {
    return prev + next.quantity * next.price
  }, 0)
}

export const {
  addToCart,
  removeFromCart,
  incrementCartQuantity,
  decrementCartQuantity,
  emptyCart,
} = cartSlice.actions

export default cartSlice.reducer
