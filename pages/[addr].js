import { useRouter } from "next/router";
import React from 'react'
import { MoralisProvider } from "react-moralis";
import Header from "../components/Header";
import Decider from "../components/Decider";
import Footer from "../components/Footer";

const addr = () => {
  const address = useRouter().query.addr
  return (
    <MoralisProvider initializeOnMount={false}>
      <Header />
      <Decider address={address} /> 
      <Footer />    
    </MoralisProvider>
  )
}

export default addr;
