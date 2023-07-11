import axios from 'axios'

export async function getCepRequest(cep: string) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    return response?.data
  } catch (error: any) {
    return error?.response
  }
}
