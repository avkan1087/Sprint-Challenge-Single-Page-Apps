import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.image} />
      <h3>Name: {props.name}</h3>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Gender: {props.gender}</p>
      <p>Origin: {props.origin.name}</p>  
    </Card>
 
)}


const Image = styled.img`
  border-radius: 500px;
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
`

const Card = styled.div`
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
`
