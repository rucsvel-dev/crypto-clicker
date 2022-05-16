import { useState, useMemo, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { Contract } from "typechain";
import WalletConnectProvider from "@walletconnect/web3-provider";

import Web3Context from "./Web3Context";
import { clickerAddress } from "../../../config";
// @ts-ignore
import ClickerContract from "../../../artifacts/contracts/Clicker.sol/Clicker.json";
import { Clicker } from "../../../typechain";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "8584c559c40e4c4dbbb75c8564b161ef",
    },
  },
};

const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [clickerContract, setClickerContract] = useState(null);

  const onWalletConnect = async () => {
    const web3Modal = new Web3Modal({
      disableInjectedProvider: false,
      cacheProvider: false,
      providerOptions,
    });

    await web3Modal.clearCachedProvider();
    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    setProvider(provider);
    setSigner(signer);
    setAddress(address);
  };

  useEffect(() => {
    if (provider && signer) {
      const clickerContract = new ethers.Contract(
        clickerAddress,
        ClickerContract.abi,
        signer
      ) as Clicker;

      setClickerContract(clickerContract);
    }
  }, [provider, signer]);

  const web3Api = useMemo(
    () => ({
      isConnected: Boolean(provider),
      provider,
      onWalletConnect,
      address,
      clickerContract,
    }),
    [provider, address, clickerContract]
  );

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export default Web3Provider;
