import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritosReducers from './reducers/favoritos'

import api from '../services/api'

//centralizador de todos os reducer
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducers,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

//vai fazer um tipo basedo no tipo retornado por store.getState
export type RootReducer = ReturnType<typeof store.getState>
