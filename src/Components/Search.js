import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

function Search(props) {
  const setInput = props.setInput;
  const [name, setName] = useState("");

  const onchange = (e) => {
    setName(e.target.value);
  };

  const onClick = () => {
    setInput(name);
  };

  return (
    <Fragment>
      <input type="text" onChange={onchange} />
      <button onClick={onClick}>Search</button>
    </Fragment>
  );
}

export default Search;
