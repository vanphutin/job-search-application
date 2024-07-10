import React from "react";
import { GrLike } from "react-icons/gr";
import { Link } from "react-router-dom";

const Card = (props) => {
  console.log("props", props);
  return (
    <div
      className="card col-4"
      style={{
        width: "350px",
        height: "auto",
        maxHeight: "400px",
        borderRadius: "20px",
        background: "pink",
      }}
    >
      <Link to={`/detail/${props.id}`}>
        <div className="card-item" style={{ padding: "10px" }}>
          <div className="card-item__header d-flex justify-content-between align-items-center ">
            <p
              className="header-date fw-bold "
              style={{
                padding: "3px 7px ",
                border: "1px solid #fff",
                borderRadius: "10px",
                backgroundColor: "#fff",
                fontSize: "14px",
              }}
            >
              {props.date}
            </p>
            <p
              className="favourite"
              style={{
                padding: "5px ",
                border: "1px solid #fff",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <GrLike />
            </p>
          </div>
          <div className="">
            <div
              className="main-title card-item__main row "
              style={{
                margin: "10px 0 40px 0",
                width: "100%",
              }}
            >
              <div className="main-title__left col-8">
                <p className="left-company-name fs-6 m-0 text-start">
                  {props.companyName}
                </p>
                <h3 className="left-name-job fs-2 m-0 text-start">
                  {props.titleJob}
                </h3>
              </div>
              <div className="main-title__right col-4 d-flex justify-content-end align-items-center">
                <img
                  src={props.logoCompany}
                  alt=""
                  className="right-logo card-item__main "
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card-item__footer d-flex justify-content-between align-items-center">
            <p className="footer-salary fw-bold text-align-center m-0">
              ${props.salary}/hr
            </p>
            <button className="btn btn-dark">Details</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
