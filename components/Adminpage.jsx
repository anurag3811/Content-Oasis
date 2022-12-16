import React from "react";
import Addcon from "./Addcon";
import Dashboard from "./Dashboard";
import InsideCard from "./InsideCard";
import child from "../contracts/child.json";
import { useWeb3Contract } from "react-moralis";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useNotification } from "web3uikit";
import main from "../contracts/main.json";
import { useRouter } from "next/router";
import InsideCard2 from "./InsideCard2";

const Adminpage = (props) => {
  const router = useRouter();

  const mainaddress = "0xfD19CE4D695a3337A2E7966718538DDDD7C2703d";

  const address1 = props.address1;

  const dispatch = useNotification();

  const {
    runContractFunction: withdraw,
    isFetching: isFetching2,
    isLoading: isLoading2,
  } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "withdraw",
    params: {},
  });

  const handleNewNotification = () => {
    dispatch({
      type: "info",
      message: "Your Funds have been withdrawn",
      title: "Funds withdrawn!",
      position: "topR",
      icon: "bell",
    });
  };

  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1);
      updateUIValues();
      handleNewNotification(tx);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewNotification2 = () => {
    dispatch({
      type: "info",
      message: "Content has been removed",
      title: "Content Removed",
      position: "topR",
      icon: "bell",
    });
  };

  const handleSuccess2 = async (tx) => {
    try {
      await tx.wait(1);
      updateUIValues();
      handleNewNotification2(tx);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewNotification1 = () => {
    dispatch({
      type: "info",
      message: "Your page is deleted",
      title: "Page Deleted",
      position: "topR",
      icon: "bell",
    });
  };
  const handleSuccess1 = async (tx) => {
    try {
      await tx.wait(1);
      handleNewNotification1(tx);
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  let account1;

  const { account, isWeb3Enabled } = useMoralis();

  const [name, setname] = useState("");
  const [temp, settemp] = useState("");
  const [description, setdescription] = useState("");
  const [contract_number, setcontract_number] = useState("");

  // const [name, setname] = useState("")
  const [pre1, setpre1] = useState([]);
  const [pre2, setpre2] = useState([]);
  const [pre3, setpre3] = useState([]);

  const [alpha, setalpha] = useState("");
  const [beta, setbeta] = useState("");
  const [gamma, setgamma] = useState("");
  const [balh, setbalh] = useState("");

  const [level, setlevel] = useState("");
  const [prices, setprices] = useState([
    1000000000000000, 1000000000000000, 1000000000000000,
  ]);

  const [remover, setremover] = useState("");

  const { runContractFunction: getname } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getname",
    params: {},
  });

  const { runContractFunction: getprices } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getprices",
    params: {},
  });

  const { runContractFunction: getdescription } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getdescription",
    params: {},
  });

  const { runContractFunction: getcontract_number } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getcontract_number",
    params: {},
  });

  const { runContractFunction: getpre1 } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getpre1",
    params: {},
  });

  const { runContractFunction: getpre2 } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getpre2",
    params: {},
  });

  const { runContractFunction: getpre3 } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getpre3",
    params: {},
  });

  const { runContractFunction: getalpha } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getalpha",
    params: {},
  });

  const { runContractFunction: getbeta } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getbeta",
    params: {},
  });

  const { runContractFunction: getgamma } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getgamma",
    params: {},
  });

  const { runContractFunction: bal } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "bal",
    params: {},
  });

  const { runContractFunction: getlevel } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getlevel",
    params: {
      addr: temp,
    },
  });

  const {
    runContractFunction: removecontent1,
    isFetching: isFetching11,
    isLoading: isLoading11,
  } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "removecontent",
    params: {
      _level: "1",
      _link: remover,
    },
  });
  const {
    runContractFunction: removecontent2,
    isFetching: isFetching22,
    isLoading: isLoading22,
  } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "removecontent",
    params: {
      _level: "2",
      _link: remover,
    },
  });
  const {
    runContractFunction: removecontent3,
    isFetching: isFetching33,
    isLoading: isLoading33,
  } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "removecontent",
    params: {
      _level: "3",
      _link: remover,
    },
  });

  const {
    runContractFunction: deleteone,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: main,
    contractAddress: mainaddress,
    functionName: "deleteone",
    params: {
      _contract_number: contract_number,
    },
  });

  async function updateonlylevel() {
    const leveltemp = await getlevel();
    setlevel(leveltemp);
  }

  async function updateUIValues() {
    const nametemp = await getname();
    const descriptiontemp = await getdescription();
    const contract_numbertemp = await getcontract_number();

    const pre1temp = await getpre1();
    const pre2temp = await getpre2();
    const pre3temp = await getpre3();

    const alphatemp = await getalpha();
    const betatemp = await getbeta();
    const gammatemp = await getgamma();

    const balhtemp = await bal();
    const pricestemp = await getprices();

    setname(nametemp);
    setdescription(descriptiontemp);
    setcontract_number(contract_numbertemp);

    setpre1(pre1temp);
    setpre2(pre2temp);
    setpre3(pre3temp);

    setalpha(alphatemp);
    setbeta(betatemp);
    setgamma(gammatemp);

    setbalh(balhtemp);
    setprices(pricestemp);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUIValues();
    }
  }, [isWeb3Enabled]);

  function mapper1(link) {
    if (link != "removed") {
      return (
        <div className="flex justify-center">
          <div className="flex-col">
            <div
              style={{
                width: "250px",
                height: "250px",
                margin: "10px",
              }}
            >
              <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={link} />
            </div>
            <div className="flex justify-center">
              <button
                className="underline"
                disabled={isLoading11 || isFetching11}
                value={link}
                onClick={async (e) => {
                  setremover(e.target.value);
                  await removecontent1({
                    onSuccess: handleSuccess2,
                    onError: (error) => console.log(error),
                  });
                }}
              >
                {isLoading11 || isFetching11 ? (
                  <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full "></div>
                ) : (
                  "REMOVE"
                )}
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  function mapper2(link) {
    if (link != "removed") {
      return (
        <div className="flex justify-center">
          <div className="flex-col">
            {" "}
            <img
              style={{
                width: "250px",
                height: "250px",
                margin: "10px",
                objectFit: "contain",
              }}
              src={link}
            />
            <div className="flex justify-center">
              <button
                className="underline"
                disabled={isLoading22 || isFetching22}
                value={link}
                onClick={async (e) => {
                  setremover(e.target.value);
                  await removecontent2({
                    onSuccess: handleSuccess2,
                    onError: (error) => console.log(error),
                  });
                }}
              >
                {isLoading22 || isFetching22 ? (
                  <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full "></div>
                ) : (
                  "REMOVE"
                )}
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  function mapper3(link) {
    if (link != "removed") {
      return (
        <div className="flex justify-center">
          <div className="flex-col">
            {" "}
            <img
              style={{
                width: "250px",
                height: "250px",
                margin: "10px",
                objectFit: "contain",
              }}
              src={link}
            />
            <div className="flex justify-center">
              <button
                className="underline"
                disabled={isLoading33 || isFetching33}
                value={link}
                onClick={async (e) => {
                  setremover(e.target.value);
                  await removecontent3({
                    onSuccess: handleSuccess2,
                    onError: (error) => console.log(error),
                  });
                }}
              >
                {isLoading33 || isFetching33 ? (
                  <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full p-3"></div>
                ) : (
                  "REMOVE"
                )}
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className=" mb-12">
      <div className=" mt-12">
        <InsideCard2
          name={"Name: " + name}
          contract_number={"Contract Number: " + contract_number}
          desc={"Description: " + description}
        />
      </div>
      <div className="flex justify-center">
        <div className="text-4xl font-bold font-sans my-8 ">
          YOUR DASHBOARD:
        </div>
      </div>
      <Dashboard
        alpha={alpha.toString()}
        beta={beta.toString()}
        gamma={gamma.toString()}
        bal={balh ? ethers.utils.formatEther(balh) : "Loading..."}
        p1={ethers.utils.formatEther(prices[0])}
        p2={ethers.utils.formatEther(prices[1])}
        p3={ethers.utils.formatEther(prices[2])}
      />

      <div className="flex justify-center">
        <div className=" grid  lg:grid-cols-1 xs:grid-cols-1 w-3/4">
          <div className="flex justify-center">
            <div className=" grid  sm:grid-cols-3 xs:grid-cols-2 lg:pl-48">
              <input
                type="text"
                placeholder="Paste Address here...."
                className="search"
                id="mapper"
                onChange={(e) => {
                  settemp(e.target.value);
                }}
              />

              <button
                className="checkmaar mr-0 font-semibold"
                id="checkmaar"
                onClick={async function () {
                  await updateonlylevel(temp);
                }}
              >
                Find Level of an Address &rarr;
              </button>

              <div className="flex xs:justify-end h-12  sm:justify-start">
                <div
                  id="output"
                  className="  w-14 rounded-3xl flex justify-center"
                  style={{
                    zIndex: "-1",
                    backgroundColor: "#3b3b3b",
                  }}
                >
                  {level ? level.toString() : "?"}
                </div>
              </div>
            </div>
          </div>

          <div className="flex  justify-center pt-6">
            <button
              className="effect effect-1 m25 lg:ml-20"
              id="withdraw"
              disabled={isLoading2 || isFetching2}
              onClick={async () =>
                await withdraw({
                  onSuccess: handleSuccess,
                  onError: (error) => console.log(error),
                })
              }
            >
              {isLoading2 || isFetching2 ? (
                <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full "></div>
              ) : (
                "Withdraw Funds"
              )}
            </button>
          </div>
        </div>
      </div>

      <Addcon address={address1} />

      <div className="centerer">
        <div
          style={{
            color: "white",
            fontSize: "22px",
            marginBottom: "20px",
            marginRight: "5px",
          }}
          className="mt-16"
        >
          Your Premium Content of Level 1:
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className=" grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1"
          style={{
            width: "80%",
          }}
        >
          {pre1 ? pre1.map(mapper1) : "Please Subscribe"}
        </div>
      </div>
      <div className="centerer">
        <div
          style={{
            color: "white",
            fontSize: "22px",
            marginBottom: "20px",
            marginRight: "5px",
          }}
          className="mt-16"
        >
          Your Premium Content of Level 2:
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className=" grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1"
          style={{
            width: "80%",
          }}
        >
          {pre2 ? (
            pre2.map(mapper2)
          ) : (
            <div style={{ "align-text": "center" }}>Please Subscribe</div>
          )}
        </div>
      </div>
      <div className="centerer">
        <div
          style={{
            color: "white",
            fontSize: "22px",
            marginBottom: "20px",
            marginRight: "5px",
          }}
          className="mt-16"
        >
          Your Premium Content of Level 3:
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className=" grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  gap-3"
          style={{
            width: "80%",
          }}
        >
          {pre3 ? pre3.map(mapper3) : "Please Subscribe"}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className=" bg-red-600 rounded-lg px-2 py-2 font-semibold"
          onClick={async () =>
            await deleteone({
              onSuccess: handleSuccess1,
              onError: (error) => console.log(error),
            })
          }
          disabled={isLoading || isFetching}
        >
          {" "}
          {isLoading || isFetching ? (
            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full "></div>
          ) : (
            "DELETE PAGE"
          )}
        </button>
      </div>
    </div>
  );
};

export default Adminpage;

// <div className="centerer h-14">
// <input
//   type="text"
//   placeholder="Paste Address here...."
//   className="search"
//   id="mapper"
//   onChange={(e) => {
//     settemp(e.target.value);
//   }}
// />
// <button
//   className="checkmaar mr-0 font-semibold"
//   id="checkmaar"
//   onClick={async function () {
//     await updateonlylevel(temp);
//   }}
// >
//   Find Level of an Address &rarr;
// </button>
// <div
//   id="output"
//   className=" rounded-3xl   pl-24"
//   style={{
//     marginLeft: "-100px",
//     zIndex: "-1",
//     backgroundColor: "#3b3b3b",
//   }}
// >
//   {level ? level.toString() : "?"}
// </div>
// <div className="inliner">
//   <button
//     className="effect effect-1 m25 ml-20"
//     id="withdraw"
//     disabled={isLoading2 || isFetching2}
//     onClick={async () =>
//       await withdraw({
//         onSuccess: handleSuccess,
//         onError: (error) => console.log(error),
//       })
//     }
//   >
//     {isLoading2 || isFetching2 ? (
//       <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full "></div>
//     ) : (
//       "Withdraw Funds"
//     )}
//   </button>
// </div>
// </div>
