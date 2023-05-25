'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

export function QuantityAdjuster() {
  const [quantity, setQuantity] = useState(0)

  function removeQuantity() {
    if (quantity >= 1) setQuantity(quantity - 1)
  }

  function addQuantity() {
    setQuantity(quantity + 1)
  }

  return (
    <div className="flex items-center gap-2 border border-[#F09035] rounded-s rounded-e p-2 h-9 justify-between w-full">
      <span onClick={removeQuantity} className="cursor-pointer">
        {quantity >= 1 ? (
          <Minus width={18} height={18} className="text-crimson-red" />
        ) : (
          <Minus width={18} height={18} />
        )}
      </span>
      <span className="">{quantity}</span>
      <span onClick={addQuantity} className="cursor-pointer text-crimson-red">
        <Plus width={18} height={18} />
      </span>
    </div>
  )
}
