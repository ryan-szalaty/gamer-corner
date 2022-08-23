import { useState, useEffect } from "react";
import Axios from "axios";

function Test() {
  const [data, setData] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("https://gamer-corner.herokuapp.com/get_data").then((response) => {
      setData(response.data);
    });
  });

  return (
    <div>
      {data.map((user) => {
        return (
          <li key={user.id}>
            {user.Username}, {user.Email}
          </li>
        );
      })}
    </div>
  );
}

export default Test;
