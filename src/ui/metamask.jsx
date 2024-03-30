'use client'

import React, { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "./interact";

export function Metamask() {
    const [walletAddress, setWalletAddress] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const initialize = async () => {
            try {
                const { address, status } = await getCurrentWalletConnected();
                setWalletAddress(address);
                setStatus(String(status)); // Convert status to string
                addWalletListener();
            } catch (error) {
                if (error instanceof Error) {
                    setStatus("");
                } else {
                    setStatus("");
                }
            }
        };
    
        initialize();
    
        return () => {
            // Clean up any event listeners or subscriptions here if necessary
        };
    }, []);
    

    const addWalletListener = () => {
        // Type assertion to inform TypeScript about the existence of window.ethereum
        const ethereum = window.ethereum;
    
        if (ethereum) {
            ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setStatus("");
                } else {
                    setWalletAddress("");
                    setStatus("");
                }
            });
        } else {
            setStatus("");
        }
    };
    

    const connectWalletPressed = async () => {
        try {
            const walletResponse = await connectWallet();
            const statusString = typeof walletResponse.status === 'string' ? walletResponse.status : ''; // Ensure status is always a string
            setStatus(statusString);
            setWalletAddress(walletResponse.address);
        } catch (error) {
            if (error instanceof Error) {
                setStatus("");
            } else {
                setStatus("");
            }
        }
    };
    

    return (
        <>
            <button
                id="walletButton"
                onClick={connectWalletPressed}
                className="whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
            >
                {walletAddress.length > 0 ? (
                    "🟢 " + walletAddress.substring(0, 6) + "..." + walletAddress.substring(38)
                ) : (
                    <span>🔴 Connect Wallet</span>
                )}
            </button>
            <p>{status}</p>
        </>
    );
}
