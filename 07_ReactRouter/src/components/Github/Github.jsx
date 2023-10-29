import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Krunalsawarkar")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-gray-700 text-white text-3xl text-center p-4">
      Github repos :{data.public_repos}
    </div>
  );
}

export default Github;
