export interface model {
  id: number | null
  name: string
  categories: string[]
  description: string
  price: number
  imageName: string
}

export const defaultInstance = {
  id: null,
  name: '',
  categories: '',
  description: '',
  price: '',
  imageName: '',
}
