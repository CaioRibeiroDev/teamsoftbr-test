'use client'

import { useStore } from '@/context/StoreContext'
import { ShoppingCart } from 'lucide-react'
import * as Popover from '@radix-ui/react-popover'

export function Cart() {
  const store = useStore()

  const quantityOfItemsInCart = store.itemsCart.reduce((count, item) => {
    if (item.quantity > 0) return count + 1
    return count
  }, 0)

  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">
        <div className="flex cursor-pointer gap-2 relative">
          <ShoppingCart className="text-crimson-red mr-5 md:mr-0" />{' '}
          <span className="hidden md:flex text-crimson-red">Carrinho</span>
          <span className="absolute -top-2 left-4 flex items-center justify-center bg-secondary text-white w-4 h-4 rounded-full text-xs">
            {quantityOfItemsInCart}
          </span>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="PopoverContent max-h-64 overflow-y-auto"
          sideOffset={5}
        >
          <h4 className="bg-secondary text-white font-bold text-center absolute w-full">
            Carrinho
          </h4>
          {store.itemsCart.map((item, index) => {
            if (item.quantity >= 1)
              return (
                <div key={index} className="w-52 pt-4 bg-white">
                  <div className="bg-white p-2">
                    <h4 className="text-crimson-red font-bold">
                      {item.quantity} {item.product.nm_product}
                    </h4>

                    <p className="pt-2">Ingredientes</p>
                    <ul className="bg-white list-disc pl-5">
                      {Object.entries(item.ingredients).map(
                        ([ingredientName, ingredient]) => (
                          <li key={ingredientName} className="text-sm">
                            {ingredient.amount} {ingredientName}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              )

            return null
          })}
          <Popover.Arrow className="PopoverArrow fill-secondary w-6 h-3" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
