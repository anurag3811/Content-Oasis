import {MoralisProvider} from "react-moralis"
import Header from '../components/Header'
import Landing from '../components/Landing'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <MoralisProvider initializeOnMount={false}>
    <Header />
    <Landing />
    <Footer />
    </MoralisProvider>
  )
}




