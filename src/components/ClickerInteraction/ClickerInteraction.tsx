import { FC, useEffect, useState } from "react";
import useClickerContract from "../../hooks/useClickerContract";
import useWeb3 from "../../providers/Web3Provider/useWeb3";

const ClickerInteraction: FC = () => {
  const [userData, setUserData] = useState({});

  const { isLoaded, getPosts, addPost } =
    useClickerContract();
  const { clickerContract } = useWeb3();

  // useEffect(() => {
  //   if (isLoaded) {
  //     initUser();
  //
  //     getUserData(setUserData);
  //   }
  // }, [isLoaded]);

  useEffect(() => {
    if (clickerContract) {
      clickerContract.on("PostAdded", (...params) => {
        console.log("===== ",params[0]);
      });
    }
  }, [Boolean(clickerContract), userData]);

  // useEffect(() => {
  //   if (clickerContract) {
  //     clickerContract.on("ValuePerClickUpgraded", (...params) => {
  //       console.log("===== ", userData, params, {
  //         ...userData,
  //         balance: params[0].toNumber(),
  //       });
  //       setUserData({
  //         ...userData,
  //         balance: params[0].toString(),
  //         valuePerClick: params[1].toString(),
  //         costToUpValuePerClickV1: params[2].toString(),
  //       });
  //     });
  //   }
  // }, [Boolean(clickerContract), userData]);

  if (!isLoaded) {
    return null;
  }
  console.log("===== userdata ", userData);
  return (
    <div>
      {/*<button onClick={earn}>Earn</button>*/}
      {/*<div>Balance: {userData.balance}</div>*/}
      {/*<div>Value per click: {userData.valuePerClick}</div>*/}
      {/*<div>*/}
      {/*  <button onClick={upgradeValuePerClickV1}>*/}
      {/*    {" "}*/}
      {/*    Upgrade value per click on 1:{" "}*/}
      {/*  </button>{" "}*/}
      {/*  {userData.costToUpValuePerClickV1}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <button> Upgrade value per click on 2: </button>{" "}*/}
      {/*  {userData.costToUpValuePerClickV2}*/}
      {/*</div>*/}
      <div>
        <button onClick={getPosts}>
          {" "}
          get posts
        </button>{" "}
      </div>
      <div>
        <button onClick={addPost}> Add post </button>{" "}
      </div>
    </div>
  );
};

export default ClickerInteraction;
