import React, { useState } from "react";
import { Card } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGlobal,
  AiOutlineHeart,
  AiOutlineEdit,
  AiFillDelete,
  AiFillHeart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser } from "../redux/action/action";
import DetailEdite from "./DetailEdite";

function UserCard(props) {
 
  const [heart, setHeart] = useState(true);
  const [modal, setModal] = useState(true);
  const post = useSelector((state) => state.posts);
  const select = useSelector((state) => state.loading);
  const dispatch = useDispatch();

 /**
  * It takes in an id as a parameter and if the post is not null, it will dispatch the deleteuser
  * action
  * @param id - The id of the user to be deleted.
  */
  const handleDelete = (id) => {
    if (post !== null) {
      dispatch(deleteuser(id));
    }
  };

  return (
    <>
      {" "}
      <Card className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <div className="img-box ">
            <Card.Img
              variant="top"
              width="200px"
              height="200px"
              src={`https://avatars.dicebear.com/v2/avataaars/${props.item.username}.svg?options[mood][]=happy `}
            />
          </div>
          <Card.Body>
            <Card.Text>
              <h5> {props.item.name} </h5>
              <p>
                <span className="logo">
                  <AiOutlineMail />
                </span>{" "}
                {props.item.email}{" "}
              </p>
              <p>
                <span className="logo">
                  <AiOutlinePhone />
                </span>{" "}
                {props.item.phone}{" "}
              </p>
              <p>
                <span className="logo">
                  <AiOutlineGlobal />
                </span>
                {props.item.website}{" "}
              </p>
            </Card.Text>
          </Card.Body>
        </div>

        <hr></hr>
        <div className="edite">
          <h4 className="heart" onClick={() => setHeart((prev) => !prev)}>
            {heart ? <AiOutlineHeart /> : <AiFillHeart />}
          </h4>
          <div className="border"></div>
          <h4 className="edit" onClick={() => setModal((prev) => !prev)}>
            {" "}
            <AiOutlineEdit />{" "}
          </h4>

          <div className="border"></div>
          <h4
            className="edit"
            onClick={() => {
              handleDelete(props.item.id);
            }}
          >
            <AiFillDelete />
          </h4>
        </div>
      </Card>
      {modal ? null : <DetailEdite item={props.item} show={modal} />}
    </>
  );
}

export default UserCard;
