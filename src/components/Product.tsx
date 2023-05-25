import Image from 'next/image'
import hamburguer from '../assets/hamburguer.png'

export function Product() {
  return (
    <div className="flex flex-col">
      <Image
        src={hamburguer}
        alt=""
        className="flex self-center w-56 md:w-[597px] "
      />
      <div className="flex flex-col gap-4 mx-4">
        <h2 className="font-medium text-lg md:text-2xl md:max-w-[597px]">
          Oferta picanha cheddar bacon
        </h2>
        <p className="md:text-lg md:max-w-[597px]">
          Delicioso hambúrguer de picanha, molho de picanha, cebola crispy,
          bacon, queijo cheddar, molho cheddar e pão mix de gergelim,
          acompanhamento e bebida.
        </p>
        <div className="flex gap-4">
          <span className="text-secondary md:text-3xl">R$31,99</span>
          <span className="line-through md:text-3xl">R$34,95</span>
        </div>
      </div>
    </div>
  )
}
