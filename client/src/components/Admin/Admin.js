import React, { useEffect, useState } from "react";
import TableListJob from "./TableListJob";
import "../../style/table.css";
import ModalCreateUser from "./ModalCreateUser";

const Admin = () => {
  const [job, setJob] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("http://localhost:8081/api/v1/jobs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJob(data.jobs);
      });
  }, []);
  return (
    <>
      <div>
        <div className="create-user">
          <button className="btn btn-dark" onClick={handleShow}>
            create new a user
          </button>
        </div>
        <div className="table-list-job">
          <TableListJob job={job} />
        </div>
      </div>
      <ModalCreateUser show={show} handleClose={handleClose} />
    </>
  );
};

export default Admin;
