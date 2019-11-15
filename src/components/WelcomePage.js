import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'



export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to="/Search"><Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /></Link>
      </Header>
    </section>
  );
}


const Header = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`
const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 500px;
  cursor: pointer;
  box-shadow: 0px;
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.65)
  }
`
