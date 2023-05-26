'use client'

import { useEffect, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

interface QuantityAdjusterProps {
  maxItems?: number
  onQuantity?: (newAmount: number) => void
  quantityCurrent?: number
  formKey?: string
}

export function QuantityAdjuster({
  maxItems = 0,
  onQuantity = () => {},
  formKey = '',
}: QuantityAdjusterProps) {
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(0)
  }, [formKey])

  function removeQuantity() {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
      onQuantity(quantity - 1)
    }
  }

  function addQuantity() {
    if (quantity < maxItems) {
      setQuantity(quantity + 1)
      onQuantity(quantity + 1)
    }
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
