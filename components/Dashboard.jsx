import React from "react";

const Dashboard = (props) => {
  return (
    <div id="adminpage" className="my-3 flex justify-center">
      <div
        id="adminpage"
        className="grid md:grid-cols-4 xs:grid-cols-1 my-3 gap-6  max-w-4xl"
      >
        <div className="flex justify-center">
          <div className="card badacard">
            <div className="centerer">
              <div
                className="balancedekh text-slate-900"
                style={{ fontFamily: "Ubuntu" }}
              >
                Balance:
              </div>
            </div>

            <div className="centerer">
              <div className="dabbus" id="balancebox">
                {props.bal ? props.bal : "Loading"} ETH
              </div>
            </div>

            <div className="centerer">
              {/* <button className="fetchbtn bg-gray-50 text-slate-900" id="getbal">Fetch</button> */}
            </div>
          </div>
        </div>

        <div className="card sabsebada  md:max-w-3xl col-span-3   xs:w-52 md:w-full md:pl-0">
          <div className="centerer">
            <div
              className="balancedekh text-slate-900"
              style={{ fontFamily: "Ubuntu" }}
            >
              NUMBER OF PATREONS:
            </div>
          </div>

          <div className="grid md:grid-cols-3 xs:grid-cols-1">
            <div className="flex-col">
              <div className="flex justify-center">
                <div className="counts" id="alphas">
                  {props.alpha ? props.alpha : "Loading"}
                </div>
              </div>{" "}
              <div
                className="leveltags text-slate-900 mb-0"
                style={{ fontFamily: "Poppins" }}
              >
                Level 1
              </div>
              <div className="flex justify-center">
                <div className="text-slate-700 text-xs font-mono mt-0  mb-2">
                  ({props.p1} eth)
                </div>
              </div>
            </div>
            <div className="flex-col">
              <div className="flex justify-center">
                <div className="counts" id="betas">
                  {props.beta ? props.beta : "Loading"}
                </div>
              </div>{" "}
              <div className="leveltags text-slate-900 mb-0">Level 2</div>
              <div className="flex justify-center">
                <div className="text-slate-700 text-xs font-mono mt-0  mb-2">
                  ({props.p2} eth)
                </div>
              </div>
            </div>
            <div className="flex-col">
              <div className="flex justify-center">
                <div className="counts" id="gammas">
                  {props.gamma ? props.gamma : "Loading"}
                </div>
              </div>{" "}
              <div className="leveltags text-slate-900 mb-0">Level 3</div>
              <div className="flex justify-center">
                <div className="text-slate-700 text-xs font-mono mt-0  mb-2">
                  ({props.p3} eth)
                </div>
              </div>
            </div>
          </div>

          <div className="centerer">
            {/* <button className="fetcher refresh bg-gray-50 text-slate-900" id="refresher">Refresh</button> */}
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Dashboard;
