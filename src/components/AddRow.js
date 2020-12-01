import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
// import { useParams } from "react-router-dom";
function AddRow() {
  const [userData, setUserData] = useState([
    {
      id: "",
      email: "",
      username: "",
      name: "",
      phone: "",
    },
  ]);
  const apiURL = "https://jsonplaceholder.typicode.com/users";
//   let { id } = useParams();

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "formBasicEmail":
        setUserData({
          ...userData,
          email: e.target.value,
        });
        break;
      case "formBasicUserName":
        setUserData({
          ...userData,
          username: e.target.value,
        });
        break;
      case "formBasicname":
        setUserData({
          ...userData,
          name: e.target.value,
        });
        break;
      case "formBasicphone":
        setUserData({
          ...userData,
          phone: e.target.value,
        });
        break;
        // default: "Nothing"

    }
  };
  const handlesubmit = async (e)=>{
      e.preventDefault();
    const response = await axios.post(apiURL, {userData});
    // const totalusers = totalusers.push( response )
    // console.log("***",...userData)
    // setUserData({...userData,response.data});
    console.log("handleAdd", response.data);
  }
  return (
    <div style={{ margin: "20%" }}>
      <Form onSubmit={handlesubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={userData.email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="UserName"
            value={userData.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicname">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            value={userData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicphone">
          <Form.Label>phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="phone"
            value={userData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddRow;
