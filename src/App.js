import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import { Route } from"react-router-dom";



export default function App() {
  return (


    <main>
      <Header />
      <Route exact path="/Search" component={SearchForm}/>
      <Route exact path ="/" component={WelcomePage}/>
      <Route exact path="/Characters" component={CharacterList}/>
    </main>
  );
}


