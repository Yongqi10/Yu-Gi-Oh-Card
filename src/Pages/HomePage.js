import React, { useState } from "react";
import Card from "../Components/Card";
import Search from "../Components/Search";
function HomePage() {
  const [input, setInput] = useState("");
  const [SearchType,setSearchType] = useState("Type");
  return (
    <div>
      <Search setInput={setInput} setSearchType = {setSearchType}/>
      <Card input={input} SearchType = {SearchType}/>
    </div>
  );
}

export default HomePage;
