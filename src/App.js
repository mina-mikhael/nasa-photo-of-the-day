import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/constants";
import axios from "axios";
import Header from "./Header";
import Image from "./Image";
import Footer from "./Footer";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let date = new Date();
  let today = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const [nasaData, setNasaData] = useState({});
  const [day, setDay] = useState(today);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&date=${year}-${month}-${day}`)
      .then((res) => {
        setNasaData(res.data);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [day]);

  return (
    <div className="App">
      <Header title={nasaData.title} date={nasaData.date} />
      <Button class="btn btn-primary" color="primary" onClick={() => setDay(day - 1)} disabled={day === 2}>
        Previous Day
      </Button>
      <Button class="btn btn-primary" color="primary" onClick={() => setDay(day + 1)} disabled={day >= today}>
        Next Day
      </Button>
      <Image imageUrl={nasaData.hdurl} imageInfo={nasaData.explanation} />
      <Footer copyRights={nasaData.copyright} />
    </div>
  );
}

export default App;
