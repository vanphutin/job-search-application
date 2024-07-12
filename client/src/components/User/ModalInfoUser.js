import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../../style/Profile.css";
import { useEffect, useState } from "react";

function ModalInfoUser({ show, handleClose, id }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `http://localhost:8081/api/v1/users/detailUser/${id}`
        );
        // if (res.status !== 200) {
        //   throw new Error("Network response was not ok");
        // }
        const data = await res.json();
        setUser(data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, [id]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user && user.length > 0
            ? user.map((items, index) => (
                <div className="profile-container" key={index}>
                  <img
                    src={items.avatar}
                    alt="Avatar"
                    className="profile-avatar"
                  />
                  <div className="profile-details">
                    <h2>{items.lastname + " " + items.firstname} </h2>
                    <p>
                      <strong>Email:</strong> {items.email}
                    </p>
                    <p>
                      <strong>Username:</strong> {items.username}
                    </p>
                  </div>
                </div>
              ))
            : "no data"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInfoUser;
