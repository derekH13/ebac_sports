import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  reducerPath: 'api', // Caminho do reducer para evitar conflitos
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api' // URL base da sua API
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports' // Rota da API para obter jogos
    })
  })
})

export const { useGetProdutosQuery } = api

export default api
