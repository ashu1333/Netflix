import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import "./mylist.css";
import ListComponent from "./List_Component/List_Component";

const MyList = () => {
  return (
    <div className="myList">
      <Nav />

      <div className="myList__notEmpty">
        <span>Your List</span>
        <div className="myList__item">
          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />
        </div>
      </div>
    </div>
  );
};

export default MyList;
