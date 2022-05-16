import useWeb3 from "../providers/Web3Provider/useWeb3";

type TUseClickerContract = {
  initUser: () => void;
  earn: () => void;
  upgradeValuePerClickV1: () => void;
  getUserData: (onSuccess: (value: unknown) => void) => void;
  isLoaded: boolean;
};

const useClickerContract = (): TUseClickerContract => {
  const { clickerContract, isConnected } = useWeb3();

  const getPosts = async () => {
    try {
      const array = await clickerContract.getPostsData();

      console.log('===== posts ', array)
    } catch {}
  };
//0.00008547MATIC 0.0000777MATIC
  const addPost = async (archaveId = "examplearchaiveidwith40bytesinherealmost") => {
    try {
      await clickerContract.addPosts(archaveId);
    } catch {}
  };

  // const initUser = async () => {
  //   try {
  //     await clickerContract.initUser();
  //   } catch {}
  // };
  //
  // const earn = async () => {
  //   try {
  //     await clickerContract.click();
  //   } catch {}
  // };
  //
  // const upgradeValuePerClickV1 = async () => {
  //   try {
  //     await clickerContract.upgradeValuePerClick("V1");
  //   } catch {}
  // };
  //
  // const getUserData = async (onSuccess) => {
  //   try {
  //     const [
  //       balance,
  //       valuePerClick,
  //       costToUpValuePerClickV1,
  //       costToUpValuePerClickV2,
  //     ] = await clickerContract.getUserData();
  //
  //     onSuccess({
  //       balance: balance.toString(),
  //       valuePerClick: valuePerClick.toString(),
  //       costToUpValuePerClickV1: costToUpValuePerClickV1.toString(),
  //       costToUpValuePerClickV2: costToUpValuePerClickV2.toString(),
  //     });
  //   } catch {}
  // };

  return {
    isLoaded: isConnected && Boolean(clickerContract),
    getPosts,
    addPost
  };
};

export default useClickerContract;
