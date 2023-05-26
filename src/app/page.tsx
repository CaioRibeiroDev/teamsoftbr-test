import { Header } from '@/components/Header'
import { Product } from '@/components/Product'
import { CartItem, IProduct } from '@/data/product'
import { Form } from '@/components/Form'
import { StoreContextProvider } from '@/context/StoreContext'

export const targetProductId = 0 // No caso o id seria pego pelo parametro

interface HomeProps {
  onItemsCart: (items: CartItem[]) => void
}

export default async function Home({ onItemsCart }: HomeProps) {
  const response = await fetch(
    'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products',
    {
      cache: 'no-store',
    },
  )

  const products: IProduct[] = await response.json()

  return (
    <StoreContextProvider>
      <div>
        <Header />

        <main className="md:flex md:justify-around md:mb-10">
          <Product item={products} />

          <Form products={products} />
        </main>
      </div>
    </StoreContextProvider>
  )
}
