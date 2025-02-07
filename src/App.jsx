import React, { useState } from "react";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

// 컴포넌트
function App() {

  return (
    <>
      <AddUsers/>
      <UserList/>
    </>
  );
}

export default App;
