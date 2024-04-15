import React, { Children } from 'react'
import Header from '../components/Header.tsx'
import { HStack } from '@chakra-ui/react'
import Navbar from '../components/Navbar.tsx'

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <HStack gap={0}>
            <Navbar/>
            {children}
        </HStack>
      </main>
    </div>
  )
}

export default Layout
