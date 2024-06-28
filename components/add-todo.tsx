"use client";

import { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodo("");
    console.log(todo);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Write your todo"
        name=""
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};
export default AddTodo;
