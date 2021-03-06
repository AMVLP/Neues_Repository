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
            Cocktails: probs.Cocktails, 
            alleEinbeziehen: false,
            } 
        this.aktiv = 0 
        this.backup = {
            Cocktails : probs.Cocktails, 
            einkaueinkaufsnachricht: "Zeige alle Cocktails. Für einige wirst du einkaufen müssen!",
            textzeigen: true
            }
        console.log("all probs in zutateneinfuegen", this.state)
    }

    zuladenecocktails = () => {
        let cocktailzutaten = []
        let tmpvar = 0
        this.state.Cocktails.forEach((element) => (
            tmpvar = [element.Cocktail, element.Zutaten],
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
        
        let prozent_pro_cocktail = []
        let tmp_num = 0
        let temp_per = []
        let bool = false
        let len = 0
        let prozent = 0

        cocktailzutaten.forEach((e) => (
            temp_per = e[1],
            tmp_num = 0,
            len = e[1].length,
            temp_per.forEach((e2) => (
                bool = aktivezutaten.includes(e2),
                bool ? tmp_num +=1 : null
            )),
            prozent = tmp_num / len,
            {/*(percentage > 1) ? percentage = 1 : null,*/},
            prozent_pro_cocktail.push([e[0], prozent])
        ))
        console.log("prozent", prozent_pro_cocktail)
        this.backup.cocktailprozent = prozent_pro_cocktail
        console.log("backupcoctail", this.backup)
        
        

        let allecocktails = []

        let add = 0
        moeglichecocktails.forEach((element) => (
            this.state.Cocktails.forEach((element2) => (
                add = (element === element2.Cocktail),
                ( element === element2.Cocktail ? allecocktails.push(element2) : null )
            ))
        ))
        this.setState({Cocktails : allecocktails})
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
                        <Checkbox onClick = {this.fehlende} value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    </p>
    
                    <hr
                        style= {{
                        color: "black",
                        backgroundColor: "black",
                        height: 1
                        }}> 
                    </hr>
                    
                    <Button onClick = {this.offenecocktails}  >
                        Suche passende Cocktails!
                    </Button>
    
                </div>

            }
            </div>
        );
    }
}
export default Zutateneinfuegen;