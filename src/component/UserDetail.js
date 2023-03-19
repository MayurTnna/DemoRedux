import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../redux/action/action";
import UserCard from "./UserCard";

function UserDetail() {
  const select = useSelector((state) => state.posts);
  const loding = useSelector((state) => state.loading);

  /* A hook that gives access to the dispatch function from the Redux store. */
  const dispatch = useDispatch();

  /* A hook that is used for performing side effects in function components. */
  useEffect(() => {
    dispatch(fetchposts());
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        {loding || select === [] ? (
          <div className="loading m-auto  ">
            {" "}
            <BallTriangle
              className="m-auto"
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div>
        ) : (
          select && select.map((item, index) => <UserCard item={item} />)
        )}
      </div>
    </>
  );
}

export default UserDetail;
