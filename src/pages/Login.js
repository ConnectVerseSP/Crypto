import React,{useState,useEffect} from 'react'
import Tisperse from '../images/Tisperse.png'
import Polygon from '../images/Polygon.png'
import Fuji from '../images/Fuji.png'
import BSC from '../images/BSC.png'
import FujiDark from '../images/FujiDark.png'
import FujiToMumbai from '../images/FujiToMumbai.png'
import MumbaiToFuji from '../images/MumbaiToFuji.png'
import RightArrow from '../images/RightArrow.png'
import { ethers } from 'ethers';
import { Button, Modal } from 'react-bootstrap';
import './Home.css'

// 0xf078259544740e9CA50ed6d73763e02E9D809819
const provider = new ethers.providers.Web3Provider(window.ethereum);

   
function Login() {
    const [account,setAccount]=useState('Connect Wallet')
    const [uploadName,setUploadName]=useState('')
    const [uploadLink,setUploadLink]=useState('')
    const [approvalAddress,setApprovalAddress]=useState('')
    const [approvalName,setApprovalName]=useState('')
    const [viewName,setViewName]=useState('')
    const [viewAddress,setViewAddress]=useState('')
    const [inputAdd,setInputAdd]=useState()
    const [finalAdd,setFinalAdd]=useState([])
    const [amount,setAmount]=useState(0)
    const [value,setValue]=useState([{}])
    const [count,setCount]=useState(0)
    const [chain,SetChain]=useState('')
    const [value1,setValue1]=useState([])
    const [visible,setVisible]=useState('hidden')
    const [transactionId, setTransactionId] = useState('');
    const [accountShow,setAccountShow]=useState('')
    const [selectChain,setSelectChain]=useState('select chain')
    const [balance,setBalance]=useState(0)
    const [erc20Fuji,setErc20Fuji]=useState('0x600A192175fe73f97621980366B859686fE6B452')
    const [erc20Mumbai,setErc20Mumbai]=useState('0xb467cd6DBA8f27B8595F380e51D3bea0C2273AE7')
    const [selectMode, setSelectMode]=useState('Ether')
    const [ERC20BalanceFuji,setERC20BalanceFuji]=useState(0)
    const [ERC20BalanceMumbai,setERC20BalanceMumbai]=useState(0)
    const [tokenAddress,setTokenAddress]=useState('')
    const [erc20text,seterc20Text]=useState('Import Token')
    const [erc20Class,seterc20Class]=useState('button-31')
    const [recipient,setRecipient]=useState('--')
    const [walletaddress,setWalletaddress]=useState('')
    const [viewexplorerFuji,setViewexplorerFuji]=useState('hidden')
    const [viewexplorerMumbai,setViewexplorerMumbai]=useState('hidden')
    const [showtable,setShowtable]=useState('hidden')
    const [show, setShow] = useState(false);
    const [buttonColor,setButtonColor] = useState('btn btn-danger')
    const [buttonText,setButtonText] = useState('send')
    
    const [send,setSend]=useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    
  
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    
    const abi=[
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "sendViaSend",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    
  

  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0].substring(0,4)+"...."+accounts[0].substring(38,42));
        setWalletaddress(accounts[0])
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

     
    }
  }
 
 return(
    <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-light" >
<button type="button" class="btn btn-secondary" onClick={
        

        connectWallet}>{account}</button>
        </nav>
       <br></br><br></br><br></br><br></br>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
           

            <input  placeholder="address" onChange={(e)=>{
                setSend(e.target.value)
            }}></input>
            <br></br><br></br>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
           
             <input  placeholder="amount" onChange={(e)=>{
                setAmount(e.target.value)
            }}></input>
             <br></br><br></br>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class={buttonColor} onClick={async ()=>{

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contractAddress = "0x0adc5D3AC25046983af9C61eDD76e0f921D6266d";
const signer = provider.getSigner();
const contract = new ethers.Contract(
    contractAddress,
    abi,
    signer
);
try{
const q=await contract.sendViaSend(send,{ value: ethers.utils.parseEther(`${amount}`) })
setButtonColor('btn btn-success')
setButtonText('sent')

}
catch(err){
    console.log(err)

}
// .catch(()=>{console.log('working')})

}}>{buttonText}</button>
           
    </div>

  )
}

export default Login