import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../redux/actions/userAction"

const User = () => {
  const dispatch = useDispatch()

  const usersGet = useSelector((state) => state.usersGet);
  const { users } = usersGet;

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  console.log("users21", users)

  return (
    <div>
      <h1>data</h1>
      {users && users?.map((item) => {
        return (
          <div key={item?._id}>
            <div> Product Name :  {item?.name} </div>
            <div> email Name :  {item?.email} </div>
            <div> password : {item?.password} </div>
            <br />
          </div>
        )
      })
      }
    </div>
  );
};

export default User;

