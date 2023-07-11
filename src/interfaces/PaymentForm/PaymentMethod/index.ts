export type PaymentMethodType = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY' | ''

export interface model {
  method: PaymentMethodType
  description: string
}

export const defaultInstance = {
  method: '',
  description: '',
}
