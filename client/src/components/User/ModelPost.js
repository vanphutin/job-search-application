import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModelPost = ({ show, handleClose, emailPersonPost, id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
  const [avatar, setAvatar] = useState("");
  // console.log("idPersonPost", idPersonPost);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const job = {
      id,
      title,
      description,
      location,
      salary,
      company,
      avatar,
    };

    try {
      const res = await fetch("http://localhost:8081/api/v1/jobs/createJob", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(job),
      });
      if (res.status !== 201) {
        console.log("error server");
      }
      const result = await res.json();
      console.log("result", result);
      handleClose();
    } catch (error) {
      console.log("error", error);
    }
    // console.log("job", job);
    // console.log("submmit");
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitForm}>
            <div className="form-group">
              <label htmlFor="exampleInputEmailUser">Email User</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmailUser"
                value={emailPersonPost}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputTitle">Title</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputTitle"
                placeholder="Fullstack,frontend,..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputDescription">Description</label>
              <textarea
                className="form-control"
                id="exampleInputDescription"
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. ..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputLocation">Location</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLocation"
                placeholder="Ho Chi Minh, Da Nang,..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputSalary">Salary</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputSalary"
                placeholder="70000000,3230000 ..."
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputCompany">Company</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputCompany"
                placeholder="A company, B company,..."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputAvata">Avata companny</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAvata"
                placeholder="https://img......"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Create Post
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModelPost;
