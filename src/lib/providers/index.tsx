'use client'

import React, { ReactNode } from 'react'
import { FavoritesProvider } from '@lib/context/favorites-context'
import { ToastProvider } from '@lib/context/toast-context'
import ToastContainer from '@modules/common/components/toast'

interface ProvidersProps {
  children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ToastProvider>
      <FavoritesProvider>
        {children}
        <ToastContainer />
      </FavoritesProvider>
    </ToastProvider>
  )
}

export default Providers
