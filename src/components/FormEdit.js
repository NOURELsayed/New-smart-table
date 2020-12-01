import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function FormEdit(props) {
  const history = useHistory();
  const [userData, setUserData] = useState([
    {
      id: "",
      email: "",
      username: "",
      name: "",
      phone: "",
    },
  ]);
  let { id } = useParams();
  const userApi = `https://jsonplaceholder.typicode.com/users/${id}`;

  const getUserData = async (e) => {
    try {
      const response = await axios.get(userApi);

      console.log("***", response.data);

      setUserData(response.data)
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  }

  useEffect(() => {
    getUserData()
  }, []);

  const UpdateData = async (e) => {
    e.preventDefault();
    console.log("state", userData);
    try {
      const response = await axios.put(userApi, userData);
      //props.history.push("/")
      console.log("res", response);
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
    history.push("/");
  };

  const handleChange = (e) => {
    // const newdata = {...userData}
    // newdata[e.target.id]= e.target.value
    // setUserData(newdata)
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
    }
  };

  return (
    <div style={{ margin: "20%" }}>
      <Form onSubmit={UpdateData}>
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

export default FormEdit;
