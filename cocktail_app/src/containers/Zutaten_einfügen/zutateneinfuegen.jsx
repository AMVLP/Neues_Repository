import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { Zutatenauswahl } from '../../components/Zutatenauswahl/zutatenauswahl';
import Rezeptuebersicht from '../Rezept_Übersicht/Rezeptuebersicht';

class Zutateneinfuegen extends React.Component{
    constructor(probs) {
        super(probs)
        this.state =  {
            zutaten: probs.zutaten, 
            ladeRezeptuebersicht: false, 
            cocktails: probs.cocktails, 
            alleEinbeziehen: false,
            } 
        this.aktiv = 0 
        this.backup = {
            cocktails : probs.cocktails, 
            einkaueinkaufsnachricht: "Zeige alle cocktails. Für einige wirst du einkaufen müssen!",
            textzeigen: true
            }
        console.log("all probs in zutateneinfpgen", this.state)
    }

    zuladenecocktails = () => {
        let cocktailzutaten = []
        let tmpvar = 0
        this.state.cocktails.forEach((element) => (
            tmpvar = [element.cocktail, element.Zutaten],
            cocktailzutaten.push(tmpvar)
        ));

        let aktivezutaten = []
        this.state.zutaten.forEach((element) => (
                element.Ausgewählt ?
                aktivezutaten.push(element.Zutat)
            :
            null
        ));

        let checker = (aktivezutaten, tmpelement) => (tmpelement.every(v => aktivezutaten.includes(v)))
        let tmpelement = 0
        let tmpwert = 0
        let moeglichecocktails = []
        cocktailzutaten.forEach((element) => (
            tmpelement = element[1],
            tmpwert = checker(aktivezutaten, tmpelement),

            (tmpwert ? moeglichecocktails.push(element[0]) : null)
        ));
        
        let allecocktails = []

        let add = 0
        moeglichecocktails.forEach((element) => (
            this.state.cocktails.forEach((element2) => (
                add = (element === element2.cocktail),
                ( element === element2.cocktail ? allecocktails.push(element2) : null )
            ))
        ))
        this.setState({cocktails : allecocktails})
    }
    
    offenecocktails = () => {
        this.zuladenecocktails() 
        
        this.setState({ladeRezeptuebersicht:true})
    }

    fehlende = () => {
        this.echterstatus = false
        this.echterstatus = this.state.alleEinbeziehen
        this.echterstatus ? this.echterstatus = false : this.echterstatus = true
        this.setState({alleEinbeziehen: this.echterstatus})
    }
    
    aktiveZutatenF = (data) => {
        this.aktiv = data
        this.setState({zutaten: this.aktiv})
    }


render(){
    return (
        <div> 
                {this.state.ladeRezeptuebersicht ?
                    this.state.alleEinbeziehen ? 
                        < Rezeptuebersicht {...this.backup}/>
                    :
                        < Rezeptuebersicht {...this.state}/>
                :
    <div id = "zutateneinfuegen">
    "Erste Seite"
    <h2 id = "FrontPageHead">
                        Welche Zutaten sind da?
                    </h2>
                    
                    {Zutatenauswahl(this.state.zutaten, this.aktiveZutatenF)}
    
                    <hr 
                        style= {{
                        color: "black",
                        backgroundColor: "black",
                        height: 1
                        }}> 
                    </hr>
    
                    <p id = "fehlendezutaten">
                        Fehlende Zutaten miteinbeziehen?
                        <Checkbox beiKlick = {this.fehlende} value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    </p>
    
                    <hr
                        style= {{
                        color: "black",
                        backgroundColor: "black",
                        height: 1
                        }}> 
                    </hr>
                    
                    <Button beiKlick = {this.offenecocktails}  >
                        Suche passende cocktails!
                    </Button>
    
                </div>

            }
            </div>
        );
    }
}
export default Zutateneinfuegen;