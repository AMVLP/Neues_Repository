import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


import './cocktailliste.css';

export function cocktailliste(probs) {

    let content = [];
    console.log("probscocktailliste", probs);

    let bild = ""

    probs.map((element) => (

        bild = require('../../Bilder/'+element.cocktail+'.jpg'),
    
        content.push(
            <div>
                <tr id = {element.cocktail} >
                    <Link to = {element.cocktail}>
                        <Button>
                            <td>
                                <bild src = {bild} width = "200" length = "200" />
                            </td>
                            <table>
                                <tr>
                                    <td className = "tabledatacocktailliste">
                                        <h3>
                                            {element.cocktail}
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td id = "beschreibung">
                                        {element.Beschreibung}
                                    </td>
                                </tr>
                            </table>
                        </Button>
                    </Link>
                </tr>
            <br id = "absatz"/>
            </div>
        )
    )
    )

    return (
        <div id = "cocktaillistetable">
            <table>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
}