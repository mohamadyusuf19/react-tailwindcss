import React from "react";
import { useFetch } from "./utils/Fetch";
import Header from "./components/Header";
import Movies from "./components/Movies";

const App = () => {
  const { loading, data } = useFetch(
    "https://www.omdbapi.com/?s=man&apikey=4a3b711b"
  );
  return (
    <div>
      <Header />
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div className="mx-auto max-w-4xl mt-16">
          <div className="flex flex-wrap">
            {data.map((item, idx) => {
              return (
                <Movies
                  src={item.Poster}
                  alt={item.Poster}
                  key={idx}
                  title={item.Title}
                  year={item.Year}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
