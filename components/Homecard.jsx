import React from "react";
import Link from "next/link";

const Homecard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Open Sans",
      }}
    >
      <div style={{ display: "inline", zIndex: "0" }}>
        <div style={{ width: "440px", display: "flex", margin: "0px" }}>
          <div className="card-3d-wrap mx-auto">
            <div className="card-front1 w-full">
              <div className="center-wrap">
                <div className="section text-center">
                  <div className="mb-2 xs:grid xs:grid-cols-1 sm:flex sm:justify-between">
                    <div className="flex sm:justify-start xs: justify-center">
                      <h4 style={{ display: "inline" }}>{props.name}</h4>
                    </div>
                    <div className="flex sm:justify-end xs: justify-center">
                      <h4 style={{ width: "50px", display: "inline" }}>
                        {props.contract_number}
                      </h4>
                    </div>
                  </div>

                  <div className="form-group mt-2">
                    <p
                      style={{ width: "100%", height: "100px" }}
                      className=" text-start"
                    >
                      {props.desc}
                    </p>
                  </div>

                  <div className="flex justify-start">
                    <Link href={"/" + props.contractAddress} legacyBehavior>
                      <a className="btn mt-4 check">Check</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
