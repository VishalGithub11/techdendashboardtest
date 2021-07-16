import React from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import SearchIcon from "@material-ui/icons/Search";
import Modals from "./Modals";


const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        Dashboard
        <input
          type="text"
          placeholder="Search ..."
          className="searchBar"
        ></input>
        <SearchIcon
          style={{ marginLeft: "-60px", marginTop: "10px", color: "#362BB2" }}
        />
      </div>
      {/* This dropdown has been taken from react-bootstrap  and do not forget to import CSS file*/}

      <Dropdown className="dropdown">
        <Dropdown.Toggle>Profile</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <hr />
    
      <Modals className="modal" />
    </>
  );
};

export default Dashboard;
