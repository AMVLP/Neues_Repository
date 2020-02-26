import React from 'react';
import { Checkbox } from '@material-ui/core';

import './zutatenauswahl.css';

export function Zutatenauswahl(probs, aktiveZutatenF) {

    const aenderung = (event) => {
        aktualisiereListe(event);
        aktivezutatenzurueckgeben()
    };

    const aktivezutatenzurueckgeben = () => {
        aktiveZutatenF(probs)
    }
    
    const aktualisiereListe = (event) => {

        let index = probs.findIndex(x => x.Zutat === event.target.id)

        if (index === -1) { 
            console.log("Unbekannte Zutat")
            probs.push( {Zutat: event.target.id, Ausgewählt: event.target.checked}) } 
        else {
            let status = probs[index].Ausgewählt
            let rstatus = true
            if (status === true) {rstatus = false} else {rstatus = true}
            probs[index].Ausgewählt = rstatus}
    }

    let content = []
    console.log("probs", probs)
    probs.map((element) => 
        content.push(
            <tr id = {element.Zutat} >
                <td>
                    {element.Zutat}
                </td>
                <td>
                    <Checkbox id = {element.Zutat}
                        value = "unchecked"
                        inputProps = {{ 'aria-label': 'uncontrolled-checkbox' }} 
                        onChange = {aenderung}
                        />
                </td>
            </tr>
        )
    )

    return (
        <div>
            <table id = "zutatenauswahlbody">
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
}
