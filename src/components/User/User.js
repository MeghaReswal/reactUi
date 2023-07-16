import React, { useEffect, useState } from 'react';

const User = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:2000/api/users/user');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log("data", data)

  return (
    <div>
      <h1>data</h1>
      {data && data?.data?.map((item) => {
        return (
          <div>
            <div> Product Name :  {item?.name} </div>
            <div> Brand Name :  {item?.brand} </div>
            <div> Price : {item?.price}/- </div>
            <br />
          </div>
        )
      })

      }
    </div>
  );
};

export default User;