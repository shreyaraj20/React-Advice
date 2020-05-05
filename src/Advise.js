import React, { useState, useEffect } from "react";
import axios from "axios";
function Advise() {
  const [advise, setAdvise] = useState([]);

  useEffect(() => {
    const fetchAdvice = axios
      .get("https://api.adviceslip.com/advice")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    return fetchAdvice;
  }, []);
  return (
    <div>
      <button onClick="" />
    </div>
  );
}
export default Advise;
