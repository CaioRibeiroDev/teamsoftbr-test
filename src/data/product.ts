// Ingredient

interface IngredientItem {
  id: number
  nm_item: string
  vl_item: number
}

interface IngredientGroup {
  group: string
  max_itens: number
  type: 'number' | 'boolean'
  itens: IngredientItem[]
}

interface Ingredient {
  price: number
  amount: number
}

export interface QuantityIngredients {
  [name: string]: Ingredient
}

// Product
export interface IProduct {
  id: string
  createdAt: string
  nm_product: string
  description: string
  vl_price: number
  vl_discount: number
  url_image: string
  ingredients: IngredientGroup[]
}

// Cart
export interface CartItem {
  product: IProduct
  quantity: number
  ingredients: {
    [name: string]: {
      price: number
      amount: number
    }
  }
}
