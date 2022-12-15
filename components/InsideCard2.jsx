import React from "react";

const InsideCard2 = (props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-center w-11/12 max-w-2xl">
        <div
          className="sm:h-64 w-full newcard rounded-md"
          style={{ minHeight: "350px" }}
        >
          <div className="mb-6 xs:grid xs:grid-cols-1 sm:flex sm:justify-between pt-8 sm:pl-8 ">
            <div className="flex sm:justify-start xs: justify-center">
              <h4 style={{ display: "inline" }}>{props.name}</h4>
            </div>
            <div className="flex sm:justify-end xs: justify-center">
              <h4 style={{ width: "200px", display: "inline" }}>
                <div className="flex justify-center sm:mr-8">
                  {props.contract_number}
                </div>
              </h4>
            </div>
          </div>

          <div className="form-group mt-2">
            <p style={{ width: "90%" }} className=" text-start pl-8 pb-8">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideCard2;
