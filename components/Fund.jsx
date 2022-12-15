import child from "../contracts/child.json";
import React from "react";
import InsideCard2 from "./InsideCard2";
import { useWeb3Contract } from "react-moralis";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useNotification } from "web3uikit";

const Fund = (props) => {
  const dispatch = useNotification();

  const { account, isWeb3Enabled } = useMoralis();
  const address1 = props.address1;
  const handleNewNotification = () => {
    dispatch({
      type: "info",
      message: "Your level has been upgraded",
      title: "Transaction Complete!",
      position: "topR",
      icon: "bell",
    });
  };

  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1);
      updateUIValues();
      setchalu(1);
      handleNewNotification(tx);
    } catch (error) {
      console.log(error);
    }
  };
  const [pre1, setpre1] = useState([]);
  const [pre2, setpre2] = useState([]);
  const [pre3, setpre3] = useState([]);

  const [name, setname] = useState("");
  const [latest, setlatest] = useState("");

  const [description, setdescription] = useState("");
  const [contract_number, setcontract_number] = useState("");

  const [prices, setprices] = useState([
    "1000000000000000",
    "1000000000000000",
    "1000000000000000",
  ]);
  const [level, setlevel] = useState("");

  const [chalu, setchalu] = useState("1");

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

  const { runContractFunction: getname } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getname",
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

  const { runContractFunction: getprices } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getprices",
    params: {},
  });

  const { runContractFunction: getlevel } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "getlevel",
    params: {
      addr: account,
    },
  });

  const {
    runContractFunction: fundhere1,
    isFetching: isFetching1,
    isLoading: isLoading1,
  } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "fund",
    msgValue: calprice(1),
    params: {
      curr: 0,
      latest: 1,
    },
  });

  const {
    runContractFunction: fundhere2,
    isFetching: isFetching2,
    isLoading: isLoading2,
  } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "fund",
    msgValue: calprice(2),
    params: {
      curr: level,
      latest: 2,
    },
  });

  const {
    runContractFunction: fundhere3,
    isFetching: isFetching3,
    isLoading: isLoading3,
  } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: "fund",
    msgValue: calprice(3),
    params: {
      curr: level,
      latest: 3,
    },
  });

  async function updateUIValues() {
    const nametemp = await getname();
    const descriptiontemp = await getdescription();
    const contract_numbertemp = await getcontract_number();

    const pre1temp = await getpre1();
    const pre2temp = await getpre2();
    const pre3temp = await getpre3();

    const pricestemp = await getprices();
    const leveltemp = await getlevel(account);

    setname(nametemp);
    setdescription(descriptiontemp);
    setcontract_number(contract_numbertemp);

    setpre1(pre1temp);
    setpre2(pre2temp);
    setpre3(pre3temp);

    setprices(pricestemp);
    setlevel(leveltemp);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUIValues();
    }
  }, [isWeb3Enabled]);

  function calprice(x) {
    var price;
    if (prices) {
      if (level == 0) {
        price = prices[x - 1];
      } else {
        price = prices[x - 1] - prices[level - 1];
      }
    }

    return price;
  }

  function mapper(link) {
    if (link != "removed") {
      return (
        <div class="flex justify-center">
          <img
            style={{
              width: "250px",
              height: "250px",
              margin: "10px",
              objectFit: "contain",
            }}
            src={link}
          />
        </div>
      );
    }
  }

  // style={{
  //   display: "grid",
  //   gridTemplateColumns: "3fr 2fr",
  //   width: "70%",
  //   "align-items": "center",
  // }}

  return (
    <div id="funderpage">
      <div class="flex justify-center mt-20">
        <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-4">
          <div>
            <InsideCard2
              name={"Name: " + name}
              contract_number={"Contract Number: " + contract_number}
              desc={"Description: " + description}
            />
          </div>
          <div>
            <div class="centerer mt-2 ">
              <div style={{ maxWidth: "327.61px" }}>
                <div
                  class=" h-12 align-middle rounded-md flex justify-center w-full px-6"
                  style={{ backgroundColor: "#34495e" }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "22px",
                      fontFamily: "sans-serif",
                    }}
                    class=" font-semibold pt-2 w-full"
                  >
                    CURRENT LEVEL: {level ? level.toString() : ""}
                  </div>
                </div>
              </div>
            </div>

            <div class="centerer">
              <table class="rwd-table">
                <tbody>
                  <tr>
                    <th>Level</th>
                    <th style={{ "text-align": "center" }}>Price(ETH)</th>
                    <th style={{ "text-align": "center" }}>Buy</th>
                  </tr>
                  <tr>
                    <td class="mota">Level 1</td>
                    <td class="mota">
                      <div class="flex justify-center">
                        {prices?.[0]
                          ? ethers.utils.formatEther(prices[0])
                          : "0.001"}
                      </div>
                    </td>
                    <td>
                      <div class="flex justify-center">
                        <button
                          class="disbtn  bg-slate-800"
                          id="l1"
                          disabled={
                            level >= 1 ||
                            isFetching1 ||
                            isFetching2 ||
                            isFetching3 ||
                            isLoading1 ||
                            isLoading2 ||
                            isLoading3 ||
                            chalu == 0
                          }
                          onClick={async () => {
                            setchalu(0);
                            await fundhere1({
                              onSuccess: handleSuccess,
                              onError: (error) => {
                                console.log(error);
                                setchalu(1);
                              },
                            });
                          }}
                        >
                          {" "}
                          {level >= 1
                            ? "✓"
                            : chalu == 0
                            ? "Processing..."
                            : "Get Level 1"}
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="mota">Level 2</td>
                    <td class="mota">
                      <div class="flex justify-center">
                        {prices?.[1]
                          ? ethers.utils.formatEther(prices[1])
                          : "0.001"}
                      </div>
                    </td>
                    <td>
                      <div class="flex justify-center">
                        <button
                          class="disbtn  bg-slate-800"
                          id="l2"
                          disabled={
                            level >= 2 ||
                            isFetching1 ||
                            isFetching2 ||
                            isFetching3 ||
                            isLoading1 ||
                            isLoading2 ||
                            isLoading3 ||
                            chalu == 0
                          }
                          onClick={async () => {
                            setchalu(0);
                            await fundhere2({
                              onSuccess: handleSuccess,
                              onError: (error) => {
                                console.log(error);
                                setchalu(1);
                              },
                            });
                          }}
                        >
                          {level >= 2
                            ? "✓"
                            : chalu == 0
                            ? "Processing..."
                            : "Get Level 2"}
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="mota">Level 3</td>
                    <td class="mota">
                      <div class="flex justify-center">
                        {prices?.[2]
                          ? ethers.utils.formatEther(prices[2])
                          : "0.001"}
                      </div>
                    </td>
                    <td>
                      <div class="flex justify-center">
                        <button
                          class="disbtn bg-slate-800"
                          id="l3"
                          disabled={
                            level >= 3 ||
                            isFetching1 ||
                            isFetching2 ||
                            isFetching3 ||
                            isLoading1 ||
                            isLoading2 ||
                            isLoading3 ||
                            chalu == 0
                          }
                          onClick={async () => {
                            setchalu(0);
                            await fundhere3({
                              onSuccess: handleSuccess,
                              onError: (error) => {
                                console.log(error);
                                setchalu(1);
                              },
                            });
                          }}
                        >
                          {level >= 3
                            ? "✓"
                            : chalu == 0
                            ? "Processing..."
                            : "Get Level 3"}
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="centerer">
        <div
          style={{
            color: "white",
            fontSize: "22px",
            marginBottom: "20px",
            marginRight: "5px",
            fontFamily: "Ubuntu",
          }}
          class="mt-16"
        >
          Your Premium Content of Level 1:
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  gap-3"
          style={{
            width: "80%",
          }}
        >
          {pre1 ? (
            pre1.map(mapper)
          ) : (
            <>
              <div class="flex justify-center">
                <div></div>
              </div>
              <div class="flex justify-end mr-1">
                <div>Please </div>
              </div>
              <div class="flex justify-start ml-1">
                <div> Subscribe!</div>
              </div>
              <div class="flex justify-center">
                <div></div>
              </div>
            </>
          )}
        </div>
      </div>

      <div class="centerer">
        <div
          style={{
            color: "white",
            fontSize: "22px",
            marginBottom: "20px",
            marginRight: "5px",
            fontFamily: "Ubuntu",
          }}
          class="mt-16"
        >
          Your Premium Content of Level 2:
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  gap-3"
          style={{
            width: "80%",
          }}
        >
          {pre2 ? (
            pre2.map(mapper)
          ) : (
            <>
              <div class="flex justify-center">
                <div></div>
              </div>
              <div class="flex justify-end mr-1">
                <div>Please </div>
              </div>
              <div class="flex justify-start ml-1">
                <div> Subscribe!</div>
              </div>
              <div class="flex justify-center">
                <div></div>
              </div>
            </>
          )}
        </div>
      </div>

      <div class="centerer">
        <div
          style={{
            color: "white",
            fontSize: "22px",
            marginBottom: "20px",
            marginRight: "5px",
            fontFamily: "Ubuntu",
          }}
          class="mt-16"
        >
          Your Premium Content of Level 3:
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  gap-3"
          style={{
            width: "80%",
          }}
        >
          {pre3 ? (
            pre3.map(mapper)
          ) : (
            <>
              <div class="flex justify-center">
                <div></div>
              </div>
              <div class="flex justify-end mr-1">
                <div>Please </div>
              </div>
              <div class="flex justify-start ml-1">
                <div> Subscribe!</div>
              </div>
              <div class="flex justify-center">
                <div></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fund;
