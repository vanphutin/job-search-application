import React, { useState } from "react";
import ModelPost from "./ModelPost";

const TableUser = (props) => {
  const [show, setShow] = useState(false);
  const [emailPersonPost, emailIdPersonPost] = useState(null);
  const [id, setIdPersonPost] = useState(null);

  const handleClose = () => {
    emailIdPersonPost(null);
    setIdPersonPost(null);
    setShow(false);
  };
  const handleShow = (emailUser, idUser) => {
    emailIdPersonPost(emailUser);
    setIdPersonPost(idUser);
    setShow(true);
  };

  // console.log("idUser >", idPersonPost);
  return (
    <>
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
                    <button
                      className="btn btn-dark"
                      onClick={() => handleShow(items.email, items.idUser)}
                    >
                      Post
                    </button>
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
      <ModelPost
        show={show}
        handleClose={handleClose}
        emailPersonPost={emailPersonPost}
        id={id}
      />
    </>
  );
};

export default TableUser;
