import { FC } from "react";

import useWalletBar from "./useWalletBar";

const WalletBar: FC = () => {
  const { address, onWalletConnect } = useWalletBar();

  return (
    <div>
      {address ? (
        <div>Waller address: {address}</div>
      ) : (
        <button onClick={onWalletConnect}>Connect wallet</button>
      )}
    </div>
  );
};

export default WalletBar;
