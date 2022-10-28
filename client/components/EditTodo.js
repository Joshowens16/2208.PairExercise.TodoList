import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditTodo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const Navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(`/api/todos/${id}`);
    Navigate("/");
  };
  return (
    <div className="delete-button">
      <button onClick={handleDelete()}>Delete Task</button>
    </div>
  );
};

export default EditTodo;
