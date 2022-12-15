import React from 'react'
import Create from '../components/Create'
import { MoralisProvider } from 'react-moralis'
import Footer from '../components/Footer'

const create = () => {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Create />
      <Footer />
      </MoralisProvider>
  )
}

export default create
