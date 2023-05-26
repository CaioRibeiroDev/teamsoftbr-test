import { numberFormatReal } from '@/util/numberFormatReal'
import { QuantityAdjuster } from './QuantityAdjuster'

interface AddIngredientProps {
  name: string
  price: number
  maxItems?: number
  onQuantity?: (newAmount: number) => void
  formKey?: string
}

export function AddIngredient({
  name,
  price,
  maxItems,
  onQuantity,
  formKey,
}: AddIngredientProps) {
  return (
    <div className="flex justify-between items-center mt-4 pb-2 border-secondary border-b md:mt-7">
      <div>
        <p className="font-medium mb-9">{name}</p>
        <span className="text-[#F09035]">+ {numberFormatReal(price)}</span>
      </div>

      <div>
        <QuantityAdjuster
          maxItems={maxItems}
          onQuantity={onQuantity}
          formKey={formKey}
        />
      </div>
    </div>
  )
}
