import React, { useEffect, useState } from "react";
import Card from "./Card";

const ListCard = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/api/v1/jobs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setJobs(data.jobs);
      });
  }, []);

  return (
    <div
      className="row"
      style={{
        margin: "20px",
        gap: "10px",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      {jobs && jobs.length > 0
        ? jobs.map((items, index) => (
            <Card
              date={items.createdAt.toString().split("-").slice(0, 2).join("-")}
              companyName={items.company}
              titleJob={items.title}
              logoCompany={items.avatar}
              salary={items.salary}
              id={items.idJob}
              key={index}
            />
          ))
        : "No Data"}
    </div>
  );
};

export default ListCard;
