import React from 'react';
import {cocktail} from "../../components/Cocktailliste/Cocktails/cocktails.jsx";

class Rezept extends React.Component{
    constructor(probs) {
        super(probs)
        this.state =  probs
        console.log("Rezept", this.state.cocktail)
    }

    render () {

        return (
            <div id = "Rezept">
                { cocktail(this.state) }
            </div>
        );
    }

}
export default Rezept;