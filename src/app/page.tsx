import { Header } from '@/components/Header'
import { Product } from '@/components/Product'
import { AddIngredient } from '@/components/AddIngredient'
import { QuantityAdjuster } from '@/components/QuantityAdjuster'

export default function Home() {
  return (
    <div>
      <Header />

      <main className="md:flex md:justify-around md:mb-10">
        <Product />

        <div className="mx-4 mt-4 md:border md:rounded md:p-6 md:w-[450px]">
          <div className="bg-[#FDD70E33] px-4 py-2">
            <p className="font-medium text-sm md:text-base">
              Adicionar Ingredientes
            </p>
            <p className="text-secondary text-xs md:text-sm">
              Até 8 ingredientes.
            </p>
          </div>

          <AddIngredient />

          <div className="bg-[#FDD70E33] px-4 pt-2 pb-6 mt-5 font-medium">
            <p className="font-medium text-sm md:text-base">
              Precisa de Talher?
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="yes" className="flex justify-between">
              <span>Sim</span>
              <input id="yes" type="radio" name="higher" className="w-4 h-4" />
            </label>
            <label htmlFor="no" className="flex justify-between">
              <span>Não</span>
              <input id="no" type="radio" name="higher" className="w-4 h-4" />
            </label>
          </div>

          <div className="flex gap-2 mt-10 mb-5">
            <div className="w-56">
              <QuantityAdjuster />
            </div>

            <button className="bg-secondary text-white w-full rounded-sm">
              Adicionar
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
