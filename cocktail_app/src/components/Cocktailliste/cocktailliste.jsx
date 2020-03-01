import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


import './cocktailliste.css';

export function cocktailliste(probs) {

    let content = [];
    console.log("probscocktailliste", probs);

    let bild = ""

    probs.map((element) => (

        bild = require('../../Bilder/'+element.Cocktail+'.jpg'),
        
        content.push(
            <div>
                <tr id = {element.Cocktail} >
                    <Link to = {element.Cocktail}>
                        <Button>
                            <td>
                                <img src = {bild} width = "200px" length = "200px" />
                            </td>
                            <table>
                                <tr>
                                    <td className = "tabledatacocktailliste">
                                        <h3>
                                            {element.Cocktail}
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