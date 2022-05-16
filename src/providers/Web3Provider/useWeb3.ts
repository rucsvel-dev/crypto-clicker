import { useContext } from "react";

import Web3Context, { TWeb3Context } from "./Web3Context";

const useWeb3 = (): TWeb3Context => {
  return useContext(Web3Context);
};

export default useWeb3;

