import { useRouter } from "next/router";
import React from 'react'
import { MoralisProvider } from "react-moralis";
import Header from "../components/Header";
import Decider from "../components/Decider";
import Footer from "../components/Footer";

const Addr = () => {
  const address = useRouter().query.Addr
  return (
    <MoralisProvider initializeOnMount={false}>
      <Header />
      <Decider address={address} /> 
      <Footer />    
    </MoralisProvider>
  )
}

export default Addr;
