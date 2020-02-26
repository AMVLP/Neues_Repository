
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigationszeile } from "./components/Navigations_Zeile/navigationszeile.jsx";

import './App.css';

class App extends React.Component {
  state = {
    cocktails: 
    [
      {Cocktail:"Cosmopolitan", Zutaten: ["Wodka", "Cranberrysaft", "Limette", "Eiswürfel"], Zubereitung: ["1. Wodka, Cranberrysaft & Eiswürfel in Cocktailshaker schütteln.", "2. Mit Limette verzieren."]},
      {Cocktail:"Mojito", Zutaten: ["Rum", "Soda", "Limette", "Eiswürfel", "Zucker", "Minze"], Zubereitung: ["1. Limettenstücke achteln und mit Zucker und Minze ins Glas legen.", "2. Mit Eiswürfeln füllen.", "3. Mit Soda und Rum Glas befüllen."]},
      {Cocktail:"Mai Tai", Zutaten: ["Rum", "Orangensaft",  "Ananassaft", "Limette"], Zubereitung: ["1. Limette auspressen und alles in einem Cocktailshaker schütteln."]},
      {Cocktail:"Mint Julep", Zutaten: ["Whiskey", "Soda", "Minze", "Eiswürfel", "Zucker"], Zubereitung: ["1. Minze und Zucker gemeinsam zerdrücken.", "2. Glas damit und Eiswürfeln befüllen.", "3. Soda und Whiskey hinzugeben"]},
      {Cocktail:"Wodka Sunrise", Zutaten: ["Wodka", "Orangensaft", "Eiswürfel"], Zubereitung: ["1. Alle Zutaten in ein Glas geben.", "2. Gut umrühren."]},
    ],
    zutaten : 
    [ 
      {Zutat:"Wodka", Ausgewählt:false}, 
      {Zutat:"Rum", Ausgewählt:false},
      {Zutat:"Whsikey", Ausgewählt:false},
      {Zutat:"Eiswürfel", Ausgewählt:false},
      {Zutat:"Zucker", Ausgewählt:false},
      {Zutat:"Limette", Ausgewählt:false},
      {Zutat:"Minze", Ausgewählt:false},
      {Zutat:"Soda", Ausgewählt:false},
      {Zutat:"Orangensaft", Ausgewählt:false},
      {Zutat:"Cranberrysaft", Ausgewählt:false},
      {Zutat:"Ananassaft", Ausgewählt:false},
      
    ]  
  }
  

  render () {
    
    return (

      <BrowserRouter>
        <div id = "app"> 
          {navigationszeile(this.state)}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
