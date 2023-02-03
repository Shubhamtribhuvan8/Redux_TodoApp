import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Other from "./Other";
import Todo from "./Todo";
import TodoShow from "./TodoShow";
function RoutesComp(props) {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Todo" element={<Todo />} />
      <Route path="/TodoShow" element={<TodoShow/>} />
      <Route path="/Other" element={<Other />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RoutesComp;