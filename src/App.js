import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "./component/CardComponent";
import styles from "styled-components";

/*
`https://cdn.viventura.info/img/480x360/${}.jpg`
https://www.galapatours.com/
*/

// wrapper with styled components
const Wrapper = styles.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-color: rgba(255, 110, 0, 0.1);
`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-staging.venturatravel.org/trips/")
      .then(({ data }) => {
        setData(data.data);
      });
  }, []);

  return (
    <div className="App">
      <Wrapper>
        {data
          ? data
              // .filter((item, index) => index <= 3)
              .map((item, index) => <CardComponent key={index} {...item} />)
          : null}
      </Wrapper>
    </div>
  );
}

export default App;
