import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import {Link} from "react-router-dom";


export default function SearchForm() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  
  return (
    <div >
      <form > 
        <input
        id="name" type="text" name="textfield" placeholder="Search" value={query} onChange={handleInputChange}/>

        <Link to="/"><button>Home</button></Link>
      </form>
      <CharacterList data={data} setData={setData} query={query} />
  </div>
)}
