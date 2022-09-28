import { React, useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Homepage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    setIsLoading(true);
    Axios.get(`http://localhost:8000/api/games`).then((response) =>
      setData(response.data.results)
    );
    if (data) {
      setIsLoading(false);
    }
  }, []);
  console.log(data)
  return (
    <div>
      <section className="mainSection neonBorderGreen">
        {isLoading || !data[6] && (
          <div>
            <h1>Now loading from RAWG...</h1>
          </div>
        )}
        {!isLoading && data[6] && (
          <div>
            <h1>Spotlight Title: {data[6].name}</h1>
            <img src={data[6].background_image} />
          </div>
        )}
      </section>

      {!isLoading && data[0] && (
      <section className="articleSection neonBorderGreen">
        <div>
          <img src={data[0].background_image} />
          <p>{data[0].name}</p>
        </div>
        <div>
          <img src={data[1].background_image} />
          <p>
          {data[1].name}
          </p>
        </div>
        <div>
          <img src={data[2].background_image} />
          <p>
          {data[2].name}
          </p>
        </div>
        <div>
          <img src={data[3].background_image} />
          <p>
          {data[3].name}
          </p>
        </div>
      </section>
      )}
    </div>
  );
}

export default Homepage;
