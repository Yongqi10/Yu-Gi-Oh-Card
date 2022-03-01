import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

function Search(props) {
  const setInput = props.setInput;
  const setSearchType = props.setSearchType;
  const [name, setName] = useState("");
  const onchange = (e) => {
    setName(e.target.value);
  };

  const onClick = () => {
    setInput(name);
  };


  const option = (e) =>{
    setSearchType(e.target.value);

  }

  return (
    <Fragment>
      <span>Search by </span>
      <select className="form-select" aria-label="Default select example" defaultValue="" onChange = {option}>
        <option value="Type" >Type</option>
        <option value="Name">Name</option>
      </select>
      <input type="text" onChange={onchange} />
      <button onClick={onClick}>Search</button>
    </Fragment>
  );
}

export default Search;
