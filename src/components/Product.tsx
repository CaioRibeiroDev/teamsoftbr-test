import Image from 'next/image'
import hamburguer from '../assets/hamburguer.png'
import { IProduct } from '@/data/product'
import { numberFormatReal } from '@/util/numberFormatReal'

interface ProductProps {
  item: IProduct[]
}

export function Product({ item }: ProductProps) {
  return (
    <div className="flex flex-col">
      <Image
        src={hamburguer}
        alt=""
        className="flex self-center w-56 md:w-[597px] "
      />
      <div className="flex flex-col gap-4 mx-4">
        <h2 className="font-medium text-lg md:text-2xl md:max-w-[597px]">
          {item[0].nm_product}
        </h2>
        <p className="md:text-lg md:max-w-[597px]">{item[0].description}</p>
        <div className="flex gap-4">
          <span className="text-secondary md:text-3xl">
            {numberFormatReal(item[0].vl_discount)}
          </span>
          <span className="line-through md:text-3xl">
            {numberFormatReal(item[0].vl_price)}
          </span>
        </div>
      </div>
    </div>
  )
}
