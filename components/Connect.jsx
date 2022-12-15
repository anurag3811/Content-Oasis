import React from 'react'
import {ConnectButton} from "web3uikit"

const Connect = () => {
  return (
    <div className='try'>
    <ConnectButton moralisAuth={false}/>
    </div>
  )
}

export default Connect