import React from "react";
import Card from "./Card";
import JobDetails from "./JobDetails";

const ListCard = () => {
  const job = [
    {
      id: 1,
      date: "20 May, 2024",
      companyName: "Google",
      titleJob: "Full Stack Developer",
      logoCompany:
        "https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png",
      salary: "260",
    },
    {
      id: 2,
      date: "24 May, 2024",
      companyName: "MGM technology",
      titleJob: "Full Stack Developer",
      logoCompany:
        "https://reviewcongty.com/images/companies/mgm-technology-partners-vietnam-logo.png",
      salary: "240",
    },
  ];
  return (
    <div className="row" style={{ margin: "20px", gap: "10px" }}>
      {job && job.length > 0
        ? job.map((items, index) => (
            <Card
              date={items.date}
              companyName={items.companyName}
              titleJob={items.titleJob}
              logoCompany={items.logoCompany}
              salary={items.salary}
              id={items.id}
              key={index}
            />
          ))
        : "No Data"}
    </div>
  );
};

export default ListCard;
