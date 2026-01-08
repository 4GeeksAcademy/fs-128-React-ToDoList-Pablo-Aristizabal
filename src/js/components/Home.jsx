import React, { useState } from "react";
import Title from '../components/Title'
import NewTask from '../components/NewTask'
import List from "./List";


const Home = () => {

  return (
    <>
      <Title />
      <NewTask />
    </>
  )
}

export default Home;