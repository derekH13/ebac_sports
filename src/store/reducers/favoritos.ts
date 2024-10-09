import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritosState = {
  itens: Produto[]
}

const initialState: favoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAoFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.filter((item) => item.id !== produto.id)) {
        const newFav = state.itens.filter((item) => item.id !== produto.id)
        state.itens = newFav
        console.log('dd')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarAoFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
