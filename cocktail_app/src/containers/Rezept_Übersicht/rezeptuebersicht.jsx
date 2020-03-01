import React from 'react';
import {cocktailliste} from "../../components/Cocktailliste/cocktailliste.jsx"

class Rezeptuebersicht extends React.Component{
    constructor(probs) {
        super(probs)
        this.state = {Cocktails: probs.Cocktails}
        console.log("Rezeptuebersicht",probs)
        let showEmpty = false
        this.state.Cocktails && this.state.Cocktails.length ? this.showEmpty = false : this.showEmpty = true
        this.text = probs.einkaueinkaufsnachricht
        this.textzeigen = probs.textzeigen
        this.prozent = probs.cocktailprozent
        console.log("Prozent:", this.prozent)
        console.log(this.textzeigen)
    }

    render () {

        return (
            <div id = "Rezeptuebersicht">
                {this.showEmpty ? 
                    <p>
                        <h1> 
                            Es wurden nicht genügend Zutaten für einen Cocktail ausgewählt! 
                            Seite wird neu geladen.
                        </h1>
                        {setTimeout(() => { window.location.reload() }, 1000)}
                    </p>
                :
                <div id = "cocktailliste">
                    {this.textzeigen ? this.text : null}
                    <br />
                    {this.textzeigen ? <div>Für diese Cocktails hast du ..% der Zutaten</div> : null}
                    <br />
                    {this.textzeigen ? this.prozent.map((element) => <div class = "percent"> Cocktail: {element[0]} | Prozent: {Number((element[1]).toFixed(2))*100} % </div>) : null}
                    {cocktailliste(this.state.Cocktails)}
                </div>
                }
            </div>
        );
    }
}
export default Rezeptuebersicht;