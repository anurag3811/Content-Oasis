import React from "react";

const InsideCard = (props) => {
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
        <label for="reg-log"></label>
        <div style={{ width: "660px", display: "flex", margin: "0px" }}>
          <div class="card-3d-wrap1 mx-auto">
            <div class="card-front">
              <div class="center-wrap">
                <div class="section text-center">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="mb-6"
                  >
                    <div>
                      <h4 style={{ width: "50px", display: "inline" }}>
                        {props.name}
                      </h4>
                    </div>
                    <div>
                      <h4 style={{ width: "50px", display: "inline" }}>
                        {props.contract_number}
                      </h4>
                    </div>
                  </div>
                  <div class="form-group">
                    <i class="input-icon uil uil-at"></i>
                  </div>
                  <div class="form-group mt-2">
                    <p
                      style={{ width: "100%", height: "100%" }}
                      className=" text-start"
                    >
                      {props.desc}
                    </p>
                    <i class="input-icon uil uil-lock-alt"></i>
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

export default InsideCard;
