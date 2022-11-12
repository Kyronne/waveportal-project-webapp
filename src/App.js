import * as React from "react";
import { ethers } from "ethers";
import './App.css';

const getEthereumObject = () => window.ethereum;

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hi!
        </div>

        <div className="bio">
        I am Kye and I'm learning blockchain development and I'm currently working as a blockchain analyst. Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
