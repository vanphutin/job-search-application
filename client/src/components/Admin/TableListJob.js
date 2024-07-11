import React from "react";

const TableListJob = (props) => {
  // console.log("props", props);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Company</th>
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
                <td>{items.title}</td>
                <td>{items.location}</td>
                <td>{items.salary}</td>
                <td>{items.idUser}</td>
                <td>{items.createdAt}</td>
                <td>{items.updatedAt}</td>

                <td>
                  <button className="btn btn-info">View</button>

                  <button className="btn btn-warning">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableListJob;
