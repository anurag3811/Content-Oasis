import React from "react";
import Link from "next/link";

const Profile = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "inline", zIndex: "0" }}>
        <div style={{ width: "300px", display: "flex", margin: "0px" }}>
          <div class="card-3d-wrapp mx-auto">
            <div class="card-front">
              <div class="center-wrap">
                <div class="section text-center">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="mb-2"
                  >
                    <div></div>
                    <div></div>
                  </div>
                  <div class="form-group">
                    <i class="input-icon uil uil-at"></i>
                  </div>
                  <div class="form-group mt-2">
                    <div class="flex justify-center">
                      <img
                        style={{ width: "135px", height: "135px" }}
                        src={props.val == 0 ? "/one.png" : "/two.png"}
                      />
                    </div>
                    <i class="input-icon uil uil-lock-alt"></i>
                  </div>
                  <div className=" flex justify-center">
                    <Link
                      href={
                        props.val == 0 ? "/create" : "/" + props.contractAddress
                      }
                      legacyBehavior
                    >
                      <a class="btn mt-4 check">
                        {props.val == 0 ? "Create page" : "See your page"}{" "}
                      </a>
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

export default Profile;
