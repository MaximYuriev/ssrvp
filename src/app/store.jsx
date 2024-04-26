import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { userApi } from '../features/requests/get'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store =  configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware)
})
setupListeners(store.dispatch)