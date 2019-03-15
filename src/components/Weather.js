import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // const API_KEY = 'faa39698a8456703f73aa92f0f44d25c';
      // const result = await axios(
      //   `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/42.3601,-71.0589`,
      // );
      const result = {
        data: {
          currently: {
            temperature: 58
          }
        }
      }

      setData(result.data);
    };

    fetchData();
  }, []);


  return (
    <div className="weatherBox">
      { data.currently &&
        <p>The current temparature is {Math.ceil(data.currently.temperature)}&deg;</p>
      }
    </div>
  )
}

export default Weather;