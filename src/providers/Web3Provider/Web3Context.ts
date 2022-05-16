import { createContext } from "react";

import { Clicker } from "../../../typechain";

export type TWeb3Context = {
  isConnected: boolean;
  provider: any;
  onWalletConnect: () => void;
  address: string;
  clickerContract: Clicker;
};

const Web3Context = createContext<TWeb3Context | null>(null);

export default Web3Context;
