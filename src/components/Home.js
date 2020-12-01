import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar"
function Home() {
  const history = useHistory();
  const [userData, setUserData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  const apiURL = "https://jsonplaceholder.typicode.com/users";

  // GET request function to your Mock API
  const fetchData = async () => {
    const response = await axios.get(apiURL);

    setUserData(response.data);
    // console.log("res", response.data);
  };
  // Calling the function on component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const removeData = (id) => {
    axios.delete(`${apiURL}/${id}`).then((res) => {
      const del = userData.filter((user) => id !== user.id);
      setUserData(del);
      console.log("res", res);
    });
  };
  const update = (id) => {
    console.log(id);
    history.push(`/editform/${id}`);
  };
  // function search() {
  //   console.log("search", userData)
  //   return userData.filter(
  //     (userData) => userData.name.toLowerCase().indexOf(searchTerm) > -1
  //   );
  // }
  // console.log("search1", userData)

  return (
    <div>
      <Navbar usersData={userData} /*filteredList={search}*/  />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>UserName</th>
            <th>name</th>
            <th>phone</th>
            <th>new</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            // console.log("userData", userData);
            return (
              <tr>
                <td key={user.id}>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>
                  <Button variant="warning" onClick={() => update(user.id)}>Edit </Button>
                  <Button variant="danger" onClick={removeData}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
