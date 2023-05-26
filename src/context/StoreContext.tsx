'use client'

import {
  CartItem,
  IProduct,
  QuantityIngredients,
  targetProductId,
} from '@/data/product'
import { ReactNode, createContext, useContext, useState } from 'react'

interface OnAddItemCartProps {
  products: IProduct[]
  quantityHamburguer: number
  quantityIngredients: QuantityIngredients
}

interface StoreContextData {
  itemsCart: CartItem[]
  onAddItemCart: (props: OnAddItemCartProps) => void
}

interface StoreContextProviderProps {
  children: ReactNode
}

const StoreContext = createContext({} as StoreContextData)

export function useStore() {
  return useContext(StoreContext)
}

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  const [itemsCart, setItemsCart] = useState<CartItem[]>([])

  function onAddItemCart({
    products,
    quantityHamburguer,
    quantityIngredients,
  }: OnAddItemCartProps) {
    const selectedItem = products[targetProductId]
    const item = {
      product: selectedItem,
      quantity: quantityHamburguer,
      ingredients: quantityIngredients,
    }

    setItemsCart([...itemsCart, item])
  }

  return (
    <StoreContext.Provider value={{ itemsCart, onAddItemCart }}>
      {children}
    </StoreContext.Provider>
  )
}
