import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function TableNavbar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  // const [origData, setOrigData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const handleAdd = async () => {
    history.push("/add");
  };

  function search(usersData) {
    // console.log("search", props.usersData)
    return props.usersData.filter(
      (userData) => userData.name.toLowerCase().indexOf(searchTerm) > -1
    );
  }
//   const filteredList = () => {
//     props.filteredList(props)
// }
  useEffect(
    (usersData) => {
      const results = search(usersData);
      setSearchResults(results);
      console.log("searchResults", searchResults);
      results.map((x)=>{
      console.log(x.name)
      return x.name
      })
    },
    [searchTerm]
  );
  // console.log("state",props.usersData[1].name)
  // console.log("searchTerm", searchTerm)
  // console.log("searchResults", setSearchResults)
  // let filteredContacts = props.userData.filter ((userData)=>{
  //   return(userData.name.toLowerCase().indexOf(searchTerm) !== -1)
  // })

  // const selectBox = this.state.filterData.map(option => (
  //   <li key={option.continent}>{option.continent}</li>
  // ))
  // const filterList = searchResults.map((option) => {
  //   <li key={option.id}>option.name</li>
  //   // console.log("jjjjjjjjjjjj",option.name)
    
  // })
  return (
    <div>
      {/* <h2> hhhhhhhhhhhh{props.usersData.username} </h2> */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Button variant="outline-success" onClick={handleAdd}>
            ADD
          </Button>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            onChange={handleChange}
          />
        </Form>
      </Navbar>
    </div>
  );
}

export default TableNavbar;
