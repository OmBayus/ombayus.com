import React, { useEffect, useState } from "react"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Web3 from "web3"
import {Container} from "react-bootstrap"
import Head from "../Head"
import {BrowserView, MobileView} from 'react-device-detect';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const setupNetwork = async () => {
    const provider = window.ethereum
    if (provider) {
      const chainId = parseInt("56", 10)
      try {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: 'Binance Smart Chain Mainnet',
              nativeCurrency: {
                name: 'BNB',
                symbol: 'bnb',
                decimals: 18,
              },
              rpcUrls: ["https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed1.defibit.io","https://bsc-dataseed.binance.org"],
              blockExplorerUrls: ['https://bscscan.com'],
            },
          ],
        })
        return true
      } catch (error) {
        console.error('Failed to setup the network in Metamask:', error)
        return false
      }
    } else {
      console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
      return false
    }
}

const MetaMask = ()=>{
    const [amount,setAmount] = useState(0.01)
    const [web3,setWeb3] = useState(null)
    const [address,setAdress] = useState(null)
    const [alert,setAlert] = useState({
        open:false,
        severity:"error"
    })

    useEffect(()=>{
        var instance
        if(window.ethereum){
            try{
                instance = new Web3(window.ethereum)
            }
            catch(error){
                console.log(error)
            }
        }
        else if(window.web3){
            instance = new Web3(window.web3)
        }

        setWeb3(instance)
    },[])

    useEffect(()=>{
        if(window.ethereum){
            window.ethereum.on('accountsChanged', function (accounts) {
                setAdress(accounts[0])
              });
        }
        
    },[])

    const connect = async()=>{
        if(window.ethereum){
            await window.ethereum.enable()
            web3.eth.getAccounts().then(accounts=>{
                setAdress(accounts[0])
            })
        }
        else{
            window.open("https://metamask.io/","_blank")
        }
    }

    const sendBNB = async()=>{
        if(!(amount > 0)){
            setAlert({open:true,severity:"error",text:"The value must be greater than zero or be a number."})
            return
        }
        const toAddress = "0xc3039A01507a7aAA375800f726F0c279aa106CaC"
        const networkId = await web3.eth.net.getId();
        if(networkId !== 56){
            await setupNetwork()
            return
        }
        
        await web3.eth.sendTransaction({
            from: address,
            to:toAddress,
            value: web3.utils.toWei(String(amount),'ether')
        }).then(res=>{
            setAlert({open:true,severity:"success",text:"Thanks for your donation."})
            console.log(res)
        })
        .catch(err=>{
            setAlert({open:true,severity:"error",text:"Something went wrong."})
            console.log(err)
        })
    }


    return(
        <Container>
            <BrowserView>
                <Snackbar open={alert.open} autoHideDuration={1000} onClose={()=>setAlert({open:false,severity:"error",text:""})}>
                    <Alert onClose={()=>setAlert({open:false,severity:"error",text:""})} severity={alert.severity}>
                        {alert.text}
                    </Alert>
                </Snackbar>
                <Head title="MetaMask"  text="Support me using Metamask. Send me BNB coin."/>
                <div>
                    <div className="d-flex justify-content-center text-center w-100">
                        <div>
                            {address && <input type="number" step="0.01" className="my-3" onChange={e=> setAmount(e.target.value)} value={amount} />}
                            <br/>
                            {!address &&<button className="aboutBtn py-3 px-5" onClick={connect}>Connect Your MetaMask Wallet</button>}
                            {address && <button className="aboutBtn py-3 px-5" onClick={sendBNB}>Send BNB</button>}
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <Head title="MetaMask" text="Sorry, this option only works on the desktop."/>
            </MobileView>
            
        </Container>
    )
}

export default MetaMask