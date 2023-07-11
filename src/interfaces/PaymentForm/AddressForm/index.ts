export interface model {
  cepValue: string
  street: string
  addressNumber: string
  addressComplement?: string
  neighborhood: string
  city: string
  state: string
}

export const defaultInstance = {
  cepValue: '',
  street: '',
  addressNumber: '',
  neighborhood: '',
  city: '',
  state: '',
}
