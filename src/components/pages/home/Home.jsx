import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [datas, setDatas] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);

        const dataList = res.data.map((data) => {
          const { name, email, id } = data;
          return (
            <Link to={`/user/${id}`} key={id}>
              <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <hr />
              </div>
            </Link>
          );
        });

        setDatas(dataList);
      } catch (error) {
        console.error("Something went wrong...", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div>{datas}</div>
    </div>
  );
}

export default Home;
