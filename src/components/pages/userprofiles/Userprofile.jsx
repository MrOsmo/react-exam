import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Userprofile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`Http error: ${response.status}`);
        }
        const data = await response.json();

        const user = data.find((userDatas) => userDatas.id.toString() === id);
        if (user) {
          setUserData(user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div>
      <h2>User Information</h2>
      <h1>{userData && userData.name}</h1>
      <h1>{userData && userData.email}</h1>

      <Link to={`/`}>
      <button>Go home...</button>
      </Link>
    </div>
    
  );
}

export default Userprofile;
