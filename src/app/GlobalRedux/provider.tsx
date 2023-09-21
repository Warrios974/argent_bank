'use client'

import { PropsWithChildren } from 'react'
import { Provider } from "react-redux"
import { store } from "./store"
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

export default function Providers({ children } : PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          {children}
      </Provider>
    </QueryClientProvider>
  )
}