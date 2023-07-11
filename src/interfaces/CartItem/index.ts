import * as ICoffee from '../Coffee'

export interface model {
  quantity: number
  item: ICoffee.model
}

export const defaultInstance = {
  quantity: 0,
  item: ICoffee.defaultInstance,
}
