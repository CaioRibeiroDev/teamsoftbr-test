import { ChevronDown, ChevronLeft, UserCircle2 } from 'lucide-react'
import deliverizeLogo from '../assets/deliverize-logo.png'
import Image from 'next/image'
import { Cart } from './Cart'

export function Header() {
  return (
    <header className="h-14 flex items-center bg-[#F4F4F4] mb-6 shadow-xl md:justify-evenly md:px-10 md:h-20 md:gap-5">
      <ChevronLeft className="text-[#686868] ml-6 md:hidden" />
      <Image src={deliverizeLogo} alt="" className="m-auto md:m-0 " />

      {/* <div className="flex gap-10 w-full justify-end items-center"> */}
      <div className="hidden md:flex items-center justify-between max-w-[280px] w-full bg-white rounded px-4">
        <div className="flex flex-col">
          <p className="text-crimson-red">Entrega:</p>
          <p>R. Antonio Braune, 222</p>
        </div>

        <ChevronDown className="text-crimson-red" />
      </div>

      <input
        type="search"
        placeholder="Busque por estabelecimento ou produtos"
        className="hidden md:flex border border-crimson-red max-w-[380px] w-full h-12 rounded p-4 outline-none"
      />

      <div className="flex gap-7">
        <div className="hidden md:flex cursor-pointer gap-2">
          <UserCircle2 className="text-crimson-red" />{' '}
          <span className="text-crimson-red">Entrar</span>
        </div>

        <Cart />
      </div>
      {/* </div> */}
    </header>
  )
}
