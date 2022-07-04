import React from "react";
import Movie from "./components/Movie";
import { dummy } from "./movieData";

function App() {
  return (
    <>
      <div className="app-container">
        {
          dummy.results.map((item) => (
            <Movie 
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))
        }
      </div>
    </>
  );
}

export default App;
