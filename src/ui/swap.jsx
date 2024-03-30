'use client'

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { Input, message } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { ethers } from "ethers";

function Swap(props) {
  const { address, isConnected } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
  const [prices, setPrices] = useState(null);
  const [txDetails, setTxDetails] = useState({
    to: null,
    data: null,
    value: null,
  });

  // Hardcoded tokens
  const tokenOne = {
    ticker: "USDT",
    address: "0x55d398326f99059ff775485246999027b3197955",
  };
  const tokenTwo = {
    ticker: "MRB",
    address: "0x6624519e5948CdfAb871f4D13a0557F036ee2782",
  };

  async function sendTransaction() {
    try {
      if (window.ethereum) {
        await window.ethereum.enable(); // Request access to user's accounts
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner(); // Await here

        // Your transaction logic here
        const transaction = await signer.sendTransaction({/* transaction object */ });

        // Optionally, handle success or return transaction object
        console.log("Transaction hash:", transaction.hash);
        return transaction;
      } else {
        throw new Error("Please install MetaMask or another Ethereum wallet extension");
      }
    } catch (error) {
      console.error("Transaction error:", error);
      messageApi.error("Transaction failed");
      return null; // Return null or handle error accordingly
    }
  }

  function changeAmount(e) {
    setTokenOneAmount(parseFloat(e.target.value));
    if (e.target.value && prices) {
      setTokenTwoAmount(parseFloat((parseFloat(e.target.value) * 1000).toFixed(2))); // Convert MRB to USDT
    } else {
      setTokenTwoAmount(null);
    }
  }

  async function fetchPrices() {
    // Assuming prices are fixed, no need to fetch
    setPrices({ ratio: 1000 }); // 1 MRB = 0.001 USDT
  }

  async function fetchDexSwap() {
    // No need to swap, as prices are fixed
    if (tokenOneAmount && tokenTwoAmount !== null) {
      const calculatedAmount = parseFloat((tokenOneAmount * 1000).toFixed(2)); // Convert MRB to USDT and parse to float
      setTokenTwoAmount(calculatedAmount);
      setTxDetails({
        to: tokenTwo.address,
        data: null,
        value: calculatedAmount.toString(),
      });
    }
  }


  useEffect(() => {
    fetchPrices();
  }, []);

  useEffect(() => {
    if (txDetails.to && isConnected) {
      sendTransaction();
    }
  }, [txDetails, isConnected]);

  useEffect(() => {
    if (messageApi) {
      messageApi.destroy();
    }
  }, [messageApi]);

  return (
    <>
      {contextHolder}
      <div className="tradeBox">
        <div className="tradeBoxHeader">
          <h2>Swap</h2>
        </div>
        <div className="inputs">
          <Input
            placeholder="0"
            value={tokenOneAmount ? tokenOneAmount.toString() : ""}
            onChange={changeAmount}
            disabled={!prices}
          />
          <Input placeholder="0" value={tokenTwoAmount || ""} disabled={true} />
          <div className="switchButton">
            <ArrowDownOutlined className="switchArrow" />
          </div>
          <div className="assetOne">
            <Image src="../../public/tether-logo.png" alt="assetOneLogo" className="assetLogo" />
            {tokenOne.ticker}
          </div>
          <div className="assetTwo">
            <Image src="../../public/flame.png" alt="assetTwoLogo" className="assetLogo" />
            {tokenTwo.ticker}
          </div>
        </div>
        <div className="swapButton" onClick={fetchDexSwap}>
          Swap
        </div>
      </div>
    </>
  );
}

export default Swap;
