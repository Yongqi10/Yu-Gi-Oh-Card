import React, { useState } from "react";
import Card from "../Components/Card";
import Search from "../Components/Search";
function HomePage() {
  const [input, setInput] = useState("");

  return (
    <div>
      <Search setInput={setInput} />
      <Card input={input} />
    </div>
  );
}

export default HomePage;
