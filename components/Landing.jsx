import main from "../contracts/main.json";
import React from "react";
import Homecard from "./Homecard.jsx";
import { useWeb3Contract } from "react-moralis";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import Homecard2 from "./Homecard2";
import Link from "next/link";

function mapper(contracts) {
  if (contracts[4] != "##should not be accessed##") {
    return (
      // <div className="xl:w-1/3 md:1/2 sm:w-full">
      <Homecard2
        key={parseInt(contracts[3])}
        name={contracts[0]}
        contract_number={parseInt(contracts[3])}
        contractAddress={contracts[2].toString()}
        desc={contracts[4].slice(0, 180) + "....."}
      />
    );
  }
}

const Landing = () => {
  const { Moralis, isWeb3Enabled, chainId: chainIdHex, account } = useMoralis();
  console.log(chainIdHex);

  const chainId = parseInt(chainIdHex);
  const mainaddress = "0xfD19CE4D695a3337A2E7966718538DDDD7C2703d";
  const [arr1, setarr1] = useState([]);
  const [query, setquery] = useState("");
  const [visitor, setvisitor] = useState("");
  const { runContractFunction: getcontracts } = useWeb3Contract({
    abi: main,
    contractAddress: mainaddress,
    functionName: "getcontracts",
    params: { _accounts: account },
  });

  const { runContractFunction: getprofiles } = useWeb3Contract({
    abi: main,
    contractAddress: mainaddress,
    functionName: "getprofiles",
    params: { _address: account },
  });

  async function updateUIValues() {
    const finalarr = await getcontracts();
    const visitortemp = await getprofiles(account);
    setarr1(finalarr);
    setvisitor(visitortemp);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUIValues();
    }
  }, [isWeb3Enabled]);

  console.log(arr1);
  console.log(parseInt(visitor) + " here " + account + " " + typeof account);
  return (
    <>
      <div class="flex justify-center">
        <input
          placeholder="Search by Name / Description / Contract no. ...."
          onChange={(e) => setquery(e.target.value.toLowerCase())}
          class="p-4 rounded-full  w-96 mt-8 mb-14"
          style={{ backgroundColor: "#272727" }}
        />
      </div>
      {/* style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }} */}
      {arr1 ? (
        <div className="pb-20 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-full ml-2">
          <Profile
            val={parseInt(visitor) * 10000}
            name="Profile Card"
            contract_number="0000"
            desc="This changes"
            contractAddress={visitor}
          />
          {arr1
            .filter(
              (contract) =>
                contract[0].toLowerCase().includes(query) ||
                parseInt(contract[3]).toString().includes(query) ||
                contract[4].toLowerCase().includes(query)
            )
            .map(mapper)}{" "}
        </div>
      ) : (
        <div class="flex justify-center mt-8">
          <div>Connect to Goerli Test-net!</div>
        </div>
      )}

      <div className="flex justify-center font-semibold text-xl pb-2 hover:text-slate-400">
        <div className="underline">
          <Link href="/howto">Read Instructions</Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
