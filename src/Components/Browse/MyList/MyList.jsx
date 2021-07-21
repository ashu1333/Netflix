import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import "./mylist.css";
import ListComponent from "./List_Component/List_Component";
import { useStateValue } from "../../../StateProvider/StateProvider";

const MyList = () => {
  const [{ myList, user }] = useStateValue();

  return (
    <div className="myList">
      <Nav />

      {myList?.length === 0 ? (
        <div className="myList__empty">
          <span className="myList__empty1">Your List is Empty</span>
          <span className="myList__empty2">
            You have no Movies/Series in your list. To add one or more of those,
            click <strong>'+ My List'</strong> next to it.
          </span>
        </div>
      ) : (
        <div className="myList__notEmpty">
          <span>Your List</span>
          <div className="myList__item">
            {myList?.map((item) => (
              <ListComponent
                id={item.id}
                desc={item.desc}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyList;
