// 1.) Use the userCommonent in application.
// 2.) Debug and resolve the issues with the code snipet below.
// 2.) Add the ability update the comments with a new comment.

import React, { useState } from "react";
import axios from "axios";

const UserComments = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    setData(data);
  };

  fetchData();

  return (
    <div>
      <ui>
        {data.map((item) => {
          return (
            <>
              <li>Id: {item.id}</li>
              <li>Name: {item.name}</li>
              <li>Email: {item.email}</li>
              <li>Comment: {item.comment}</li>
              <hr />
            </>
          );
        })}
      </ui>
    </div>
  );
};

export default UserComments;
