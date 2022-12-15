import React from "react";
import Adminpage from "../components/Adminpage";
import Fund from "../components/Fund";
import Header from "../components/Header";
import { useWeb3Contract } from "react-moralis";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import main from "../contracts/main.json";

const Decider = (props) => {
  const { Moralis, isWeb3Enabled, chainId: chainIdHex, account } = useMoralis();
  const mainaddress = "0xfD19CE4D695a3337A2E7966718538DDDD7C2703d";
  const [visitor, setvisitor] = useState("");

  const { runContractFunction: getprofiles } = useWeb3Contract({
    abi: main,
    contractAddress: mainaddress,
    functionName: "getprofiles",
    params: { _address: account },
  });

  async function updateUIValues() {
    const visitortemp = await getprofiles(account);
    setvisitor(visitortemp);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUIValues();
    }
  }, [isWeb3Enabled]);

  return (
    <>
      {visitor == props.address ? (
        <Adminpage address1={props.address} />
      ) : (
        <Fund address1={props.address} />
      )}
    </>
  );
};

export default Decider;
