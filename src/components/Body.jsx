import React from "react";
import Pagination from "./Pagination";
import Filter from "./Filter";
import Movies from "./Movies";


const Body = () => {
  return (
    <main>
      <Filter />
      <Movies />
      <Pagination />
    </main>
  );
};

export default Body;
