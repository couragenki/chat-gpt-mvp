import React from "react";

const url = "https://api.github.com/repos/zeit/next.js";
const TestApi = () => {
  const [stars, setStars] = React.useState(0);
  React.useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((j) => setStars(j.stargazers_count));
  }, []);
  return stars;
};

export default TestApi;