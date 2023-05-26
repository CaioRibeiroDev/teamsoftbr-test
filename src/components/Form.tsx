'use client'

import { targetProductId } from '@/app/page'
import { AddIngredient } from './AddIngredient'
import { QuantityAdjuster } from './QuantityAdjuster'
import { IProduct, QuantityIngredients } from '@/data/product'
import { FormEvent, useState } from 'react'
import { useStore } from '@/context/StoreContext'

interface FormProps {
  products: IProduct[]
}

export function Form({ products }: FormProps) {
  const store = useStore()
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [quantityHamburguer, setQuantityHamburguer] = useState(0)
  const [quantityIngredients, setQuantityIngredients] =
    useState<QuantityIngredients>({})
  const [isFormReset, setFormReset] = useState(0)

  const ingredientsTotal = Object.entries(quantityIngredients).reduce(
    (lastValue, [key, value]) => {
      return lastValue + value.amount * value.price
    },
    0,
  )

  // A quantidade a mais que pedir de ingrediente será para cada hamburguer
  const priceTotal =
    quantityHamburguer * products[targetProductId].vl_discount +
    ingredientsTotal * quantityHamburguer

  function handleAddItemCart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    store.onAddItemCart({ products, quantityHamburguer, quantityIngredients })

    setQuantityHamburguer(0)
    setQuantityIngredients({})
    setIsChecked(false)
    setFormReset((prevKey) => prevKey + 1)
  }

  return (
    <form
      className="mx-4 mt-4 md:border md:rounded md:p-6 md:w-[450px]"
      onSubmit={handleAddItemCart}
    >
      <div className="bg-[#FDD70E33] px-4 py-2">
        <p className="font-medium text-sm md:text-base">
          Adicionar Ingredientes
        </p>
        <p className="text-secondary text-xs md:text-sm">Até 8 ingredientes.</p>
      </div>
      {products[targetProductId].ingredients
        .filter((ingredient) => ingredient.group === 'Ingredientes Extras')
        .map((ingredient) => {
          return ingredient.itens.map((item) => {
            return (
              <AddIngredient
                name={item.nm_item}
                price={item.vl_item}
                maxItems={ingredient.max_itens}
                onQuantity={(amount) => {
                  setQuantityIngredients({
                    ...quantityIngredients,
                    [item.nm_item]: {
                      price: item.vl_item,
                      amount,
                    },
                  })
                }}
                formKey={isFormReset.toString()}
                key={item.id}
              />
            )
          })
        })}
      <div className="bg-[#FDD70E33] px-4 pt-2 pb-6 mt-5 font-medium">
        <p className="font-medium text-sm md:text-base">Precisa de Talher?</p>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <label htmlFor="yes" className="flex justify-between">
          <span>Sim</span>
          <input
            id="yes"
            type="radio"
            name="higher"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="w-4 h-4"
          />
        </label>
        <label htmlFor="no" className="flex justify-between">
          <span>Não</span>
          <input
            id="no"
            type="radio"
            name="higher"
            checked={!isChecked}
            onChange={(e) => setIsChecked(!e.target.checked)}
            className="w-4 h-4"
          />
        </label>
      </div>
      <div className="flex gap-2 mt-10 mb-5">
        <div className="w-56">
          <QuantityAdjuster
            maxItems={100}
            onQuantity={(amount) => setQuantityHamburguer(amount)}
            formKey={isFormReset.toString()}
          />
        </div>

        <button
          type="submit"
          className="bg-secondary text-white w-full rounded-sm"
        >
          Adicionar
        </button>
      </div>
      <span className="font-bold">Total: </span>{' '}
      <span className="text-green-500">R$ {priceTotal.toFixed(2)}</span>
    </form>
  )
}
