// import "./App.css";
import { useState,useEffect } from "react";
import { signInWithGoogle } from "./firebase-config";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Card, Button, Row, Col } from 'react-bootstrap';
import card1 from './images/card1.png'
import card2 from './images/card2.png'
import card3 from './images/card3.png'
import Navbar from 'react-bootstrap/Navbar';
import { ethers } from 'ethers';
import './App.css';
import logo from "./images/logo.png";
import Home from './pages/Home'
import HomePage from "./HomePage";
import Course1 from "./pages/Course1"
import Courses from './Courses'
import DevRel from './DevRel'
import { Routes, Route,Link } from "react-router-dom";

function App() {

  const [loginButtonColor,setLoginButtonColor]=useState('button-1')
  const [loginButtonText,setLoginButtonText]=useState('Sign in ')
  const [loginImage,setLoginImage]=useState(false)
  const [loginButtonImage,setLoginButtonImage]=useState('')
  const [account,setAccount]=useState('Connect Wallet')
  const [accountShow,setAccountShow]=useState('')
  const [balance,setBalance]=useState(0)

 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
      };

      // Calculate the scroll duration based on the distance to scroll and the desired time (1 second in this case).
      const scrollDuration = 500; // 1 second in milliseconds.

      // Calculate the distance to scroll to the target section from the current position.
      const distance = section.getBoundingClientRect().top;

      // Calculate the number of frames needed for the animation.
      const frames = Math.ceil(scrollDuration / (1000 / 60));

      // Calculate the amount to scroll in each frame.
      const scrollStep = distance / frames;

      // Define the function to perform the scrolling animation.
      const scrollAnimation = (currentStep) => {
        if (currentStep >= frames) return;

        // Calculate the new scroll position.
        const newScrollPosition = window.pageYOffset + scrollStep;

        // Perform the scroll step.
        window.scrollTo(0, newScrollPosition);

        // Schedule the next step of the animation.
        setTimeout(() => scrollAnimation(currentStep + 1), 1000 / 60);
      };

      // Start the scrolling animation.
      scrollAnimation(0);
    }
  };

    // Define the styles for the card with a red gradient background
    const cardStyles = {
      
      width:'15em',
      backgroundIimage: 'linear-gradient(to bottom right, yellow, orange)',
      color: 'black', // Set text color to white for better visibility on the gradient background
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
    };
  

  useEffect(() => {
    
    if(localStorage.getItem("name"))
    {
      setLoginButtonColor('button-3')
      setLoginButtonText('Logged in as '+localStorage.getItem("name"))
      setLoginButtonImage(localStorage.getItem("profilePic"))
      setLoginImage(true)
      console.log(localStorage)
    }
   
  }, [])
  
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
        setAccountShow(accounts[0])

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balanc=await provider.getBalance(accounts[0]);
        setBalance(ethers.utils.formatEther(balanc))

      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balanc=provider.getBalance(accountShow);
      setBalance(ethers.utils.formatEther(balanc))
    }
    else{
      window.open("https://metamask.io/download/", '_blank');
    }
  }
  return (
    <div className="App">
      {/* <Navbar bg="dark" data-bs-theme="black" sticky="top">
        <Container>
          
          <img class="logo" src={logo}/>
          <Nav className="me-auto" style={{color:"white"}} >
            <Nav.Link href="#home" style={{color:"white"}} onClick={() => scrollToSection('home')}>Home</Nav.Link>
            <Nav.Link href="#home" style={{color:"white"}} onClick={() => scrollToSection('home')}>Courses</Nav.Link>
            <Nav.Link href="#devrel" style={{color:"white"}} onClick={() => scrollToSection('devrel')}>DevRel Automation</Nav.Link>
          </Nav>
          <button class={loginButtonColor} onClick={signInWithGoogle}>
        {loginButtonText}
      </button>
        </Container>
      </Navbar> */}
      <br></br>
      <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
      <div class="container-fluid">
        
        <img src="./logo1.png"/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        &nbsp; &nbsp;
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to='/#home'>Home</Link>
             
            </li>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <li class="nav-item">
            <Link to='/courses'>Courses</Link>
            </li>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <li class="nav-item">
            <Link to='/devrel'>DevRel</Link>
            </li>
            
          </ul>
          <div class="signin" >
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          {/* &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; */}
          </div>
          <button type="button" class="btn btn-secondary" onClick={
        

        connectWallet}>{account}</button>
        &nbsp;&nbsp;
          {loginImage==true?<div class="login">
      &nbsp;&nbsp;&nbsp;&nbsp;
      
      <img style={{width: '3em' ,borderRadius: '1.5em'}} src={loginButtonImage} alt="Circular Image"/>
</div>:<div><button class={loginButtonColor} onClick={signInWithGoogle}>
        {loginButtonText}
      </button></div>}
      {/* <button class={loginButtonColor} onClick={signInWithGoogle}>
        {loginButtonText}
      </button> */}
        </div>
      </div>
    </nav>
      {/* <div class="full-size-div">hello</div> */}
      {/* <HomePage/> */}
      {/* <Switch>
        <Route path="/course1" component={Home} />
        <Route path="/course2" component={Home} />
        <Route path="/course3" component={Home} />
      </Switch> */}
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/devrel" element={<DevRel />} />
      <Route path="/course1" element={<Course1 />} />
      <Route path="/hello" element={<Home />} />
      {/* <Route path="/player" element={<Player />} />
      <Route path="/About" element={<Player />} /> */}
    </Routes>

      <br></br>
      <br></br>
    <Navbar bg="black" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="#home" style={{color:"white"}}>2023 @Connectverse PVT</Navbar.Brand>
        <div style={{color:"white"}}>Privacy Policy</div>
      
        
        <Nav className="me-auto" style={{color:"white"}} >
         
          <Nav.Link href="#termsofuse" style={{color:"white"}}>Terms of Use</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
}

export default App;