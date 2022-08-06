import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

function App() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});

  const API_KEY = 'bfc5a31ac5060ca57928b6125b343aa9';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url
        })
        setResult(data);
        console.log(data);
      } catch (error) {
        alert(error);
      }
    }
  }

  return (
    <AppWrap>
      <div className="appContentWrap">
        <input
          type="text"
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchWeather}
        />
        {Object.keys(result) !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temperature">
              {Math.round(((result.data.main.temp-273.15) * 10)) / 10}°C
            </div>
            <div className="sky">{result.data.weather[0].main}</div>
          </ResultWrap>
        )}
      </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;

  .appContentWrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
  }
  input {
    padding: 16px;
    border: 2px solid black;
    border-radius: 16px;
  }
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  .city {
    font-size: 24px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
  .sky {
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
  }
`;
