import useWeb3 from "../../providers/Web3Provider/useWeb3";

type TUseWalletBar = {
  onWalletConnect: () => {};
  address: string;
};

const useWalletBar = (): TUseWalletBar => {
  const { onWalletConnect, address } = useWeb3();

  return { onWalletConnect, address };
};

export default useWalletBar;
