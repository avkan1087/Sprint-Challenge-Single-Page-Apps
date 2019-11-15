import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import axios from "axios";
import styled from 'styled-components'

const CharacterList = (props)=> {
  const {query, data, setData} = props;
  
  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character/") 
    .then (response =>{
      const characters = response.data.results
        .filter(char => char.name.toLowerCase().includes(query.toLowerCase()));
      
      props.setData(characters);
    });
  },[query]);

  return (
    <Wrapper>
      {props.data.map((character => {
        return(
          <CharacterCard key={character.id} {...character} />
        )
      }))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export default CharacterList