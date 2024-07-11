import React from "react";

const TableUser = (props) => {
  // console.log("props >", props.users);
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Stt</th>
              <th>Last name</th>
              <th>first Name</th>
              <th>email</th>
              <th>username</th>
              <th>avata</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {props.user &&
              props.user.map((items, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.lastname}</td>
                  <td>{items.firstname}</td>
                  <td>{items.email}</td>
                  <td>{items.username}</td>
                  <td>
                    <img
                      src={items.avatar}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                    />
                  </td>

                  <td>
                    <button className="btn btn-dark">Post</button>
                    <button
                      className="btn btn-info"
                      style={{ margin: " 0 30px" }}
                    >
                      Update
                    </button>

                    <button className="btn btn-warning">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUser;
