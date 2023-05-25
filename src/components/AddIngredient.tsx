import { QuantityAdjuster } from './QuantityAdjuster'

export function AddIngredient() {
  return (
    <div className="flex justify-between items-center mt-4 pb-2 border-secondary border-b md:mt-7">
      <div>
        <p className="font-medium mb-9">Queijo cheddar</p>
        <span className="text-[#F09035]">+ R$4,99</span>
      </div>

      <div>
        <QuantityAdjuster />
      </div>
    </div>
  )
}
