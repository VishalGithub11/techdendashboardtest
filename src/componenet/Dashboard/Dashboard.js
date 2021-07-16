import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import SearchIcon from "@material-ui/icons/Search";
import Modals from "./Modals";
import Card from "./Cards";

const Dashboard = () => {
  const [group, setGroup] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      const url = "http://localhost:8888/api/getallgroup";
      const res = await axios.get(url);
      const recievedData = res.data;
      setGroup(recievedData);
      setloading(false);
    };
    fetchPosts();
  }, []);

  console.log(group);

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

      {/* {loading && <div>loading...</div>}
      {!loading && <Card group={group} />} */}

      <Card loading={loading} group={group} />
    </>
  );
};

export default Dashboard;
