import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import NavBoo from '../components/NavBoo'
import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, usePrepareContractWrite, useContractWrite } from 'wagmi'
import { useEffect,useState } from 'react'
import abi from '../contract-abi.json'
import { optimism, optimismGoerli } from 'wagmi/chains';


export default function Home() {
  const { isDisconnected } = useAccount()
  const [mounted, setMounted] = useState(false)
  const [mintAmount, setMintAmount] = useState(1);

  useEffect(() => {
    setMounted(true)}
  ,[])

  const decrementMintAmount = () => {
      let newMintAmount = mintAmount - 1;
      if (newMintAmount < 1) {
        newMintAmount = 1;
      }
      setMintAmount(newMintAmount);
    };
  
  const incrementMintAmount = () => {
      let newMintAmount = mintAmount + 1;
      if (newMintAmount > 7) {
        newMintAmount = 7;
      }
      setMintAmount(newMintAmount);
    };

  const {config} = usePrepareContractWrite({
    address: '0x71ac43CFd2b8eeBb2205FF7f8859cB1f30C9fba4',
    abi: abi,
    enabled: true,
    functionName: 'mint',
    chainId: optimism.id,
    args:[mintAmount],
})   

  const {write} = useContractWrite(config)

  useEffect(() => {
    console.log(config)
    console.log(write)
  }
  )

  
  return (
    
    <div className='main'>
        <ConnectButton
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
        />
      <h1 className='title'>Mint a NFT ticket totally free</h1>
      <div className='ticket'></div>
      <div className='home'>
          <div className='options'>
              <button className='minus' onClick={(e) => {
                e.preventDefault()
                decrementMintAmount()
              }}>
                -
              </button>

              <input type="text" value={mintAmount} readOnly/>

              <button className='plus' onClick={(e) => {
                e.preventDefault()
                incrementMintAmount()
              }}>
                +
              </button>
          </div>
          <button
                className="button" 
                onClick={() => write?.()}
              >
                mint
          </button>
      </div>
    </div>
    

  )
}
