import React from "react";
import main from "../contracts/main.json";
import { useWeb3Contract } from "react-moralis";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";
import Header from "./Header";
import { useRouter } from "next/router";

const Create = () => {
  const router = useRouter();

  const [name1, setname1] = useState("");
  const [desc, setdesc] = useState("");
  const [l1, setl1] = useState("");
  const [l2, setl2] = useState("");
  const [l3, setl3] = useState("");

  const mainaddress = "0xfD19CE4D695a3337A2E7966718538DDDD7C2703d";

  const dispatch = useNotification();
  // string memory _name,string memory _description, uint _l1, uint _l2, uint _l3
  const {
    runContractFunction: createone,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: main,
    contractAddress: mainaddress,
    functionName: "createone",
    params: {
      _name: name1,
      _description: desc,
      _l1: l1,
      _l2: l2,
      _l3: l3,
    },
  });

  const handleNewNotification = () => {
    dispatch({
      type: "info",
      message: "Return to Home Page",
      title: "Contract Created",
      position: "topR",
      icon: "bell",
    });
  };
  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1);
      // updateUIValues()
      handleNewNotification(tx);
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const { account, isWeb3Enabled } = useMoralis();

  async function updateonlylevel() {
    const leveltemp = await createone();
  }

  return (
    <div>
      <Header />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700"
        rel="stylesheet"
        type="text/css"
      />
      <div className="flex justify-center mx-0 px-0 containers">
        <div className="container flex justify-center">
          <div className="frame">
            <div ng-app ng-init="checked = false">
              <h1
                className="font-extrabold text-xl  mt-8 mb-4"
                style={{ "text-align": "center", fontFamily: "Ubuntu" }}
              >
                Create Your OWN Page:
              </h1>
              {/* <form className="form-signin" action="" method="post" name="form"> */}
              <div className="flex justify-center">
                <div style={{ width: "90%" }}>
                  <div className="flex justify-center">
                    <label for="username label1" className="font-bold">
                      Name:
                    </label>
                  </div>
                  <input
                    className="form-styling"
                    type="text"
                    name="username"
                    placeholder=""
                    onChange={(e) => {
                      setname1(e.target.value);
                    }}
                  />

                  <div className="flex justify-center">
                    <label for="password label1" className="font-bold">
                      Description:
                    </label>
                  </div>
                  <textarea
                    className="textarea"
                    type="text"
                    name="password"
                    onChange={(e) => {
                      setdesc(e.target.value);
                    }}
                  />

                  <div className="flex justify-center">
                    <label for="username label1" className=" font-semibold">
                      Price of Level 1 (in ETH):{" "}
                    </label>
                  </div>
                  <input
                    className="form-styling"
                    type="number"
                    name="username"
                    placeholder="Eg: 0.0001"
                    onChange={(e) => {
                      e.target.value
                        ? setl1(ethers.utils.parseEther(e.target.value))
                        : "";
                    }}
                  />

                  <div className="flex justify-center">
                    <label for="username label1" className="font-semibold">
                      Price of Level 2 (in ETH):
                    </label>
                  </div>
                  <input
                    className="form-styling"
                    type="number"
                    name="username"
                    placeholder="Eg: 0.001"
                    onChange={(e) => {
                      e.target.value
                        ? setl2(ethers.utils.parseEther(e.target.value))
                        : "";
                    }}
                  />

                  <div className="flex justify-center">
                    <label for="username label1" className="font-semibold">
                      Price of Level 3 (in ETH):
                    </label>
                  </div>
                  <input
                    className="form-styling"
                    type="number"
                    name="username"
                    placeholder="Eg: 0.01"
                    onChange={(e) => {
                      e.target.value
                        ? setl3(ethers.utils.parseEther(e.target.value))
                        : "";
                    }}
                  />

                  <button
                    className="btn-signup align-middle"
                    disabled={isLoading || isFetching}
                    onClick={async () =>
                      await createone({
                        onSuccess: handleSuccess,
                        onError: (error) => console.log(error),
                      })
                    }
                  >
                    {isLoading || isFetching ? (
                      <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full p-3"></div>
                    ) : (
                      "Create Page"
                    )}
                  </button>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
