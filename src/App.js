import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/constants";
import axios from "axios";
import Header from "./Header";
import Image from "./Image";
import Footer from "./Footer";

function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setNasaData(res.data);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      {nasaData && <Header title={nasaData.title} date={nasaData.date} />}
      {nasaData && <Image imageUrl={nasaData.hdurl} imageInfo={nasaData.explanation} />}
      {nasaData && <Footer copyRights={nasaData.copyright} />}
    </div>
  );
}

export default App;
