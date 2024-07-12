import React, { useState } from "react";
import ModalInfoUser from "../User/ModalInfoUser";

const TableListJob = (props) => {
  // console.log("props", props);
  const [show, setShow] = useState(false);
  const [id, setIdUserPost] = useState(null);

  const handleDelete = async (idUser) => {
    try {
      const res = await fetch(
        `http://localhost:8081/api/v1/jobs/deleteJob/${idUser}`,
        {
          method: "DELETE",
        }
      );
      if (res.status !== 200) {
        console.log("error server");
      }
      const result = await res.json();
      // Sau đó tải lại trang
      window.location.reload();
      console.log(result); // Log response for debugging
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleViewInfoUser = (idUser) => {
    setIdUserPost(idUser);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    setIdUserPost(null);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Company</th>
            <th>Logo</th>
            <th>Job Name</th>
            <th>Country</th>
            <th>Salary</th>
            <th>IdUser</th>
            <th>Creart At</th>
            <th>Update At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.job &&
            props.job.map((items, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.company}</td>
                <td>
                  <img src={items.avatar} alt="" style={{ height: "40px" }} />
                </td>
                <td>{items.title}</td>
                <td>{items.location}</td>
                <td>{items.salary}</td>
                <td>{items.idUser}</td>
                <td>{items.createdAt}</td>
                <td>{items.updatedAt}</td>

                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleViewInfoUser(items.idUser)}
                  >
                    View
                  </button>

                  <button
                    className="btn btn-warning"
                    onClick={() => handleDelete(items.idUser)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ModalInfoUser show={show} handleClose={handleClose} id={id} />
    </>
  );
};

export default TableListJob;
