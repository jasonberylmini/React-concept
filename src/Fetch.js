import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Fetching() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setContent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  // return <div>Fetching</div>;
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">User List (ID & Name)</h2>
      {content.map((user) => (
        <div key={user.id} className="border p-3 mb-2 rounded">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
        </div>
      ))}
    </div>
  );

}

export default Fetching;
