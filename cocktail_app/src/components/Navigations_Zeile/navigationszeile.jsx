import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route} from 'react-router-dom';

import Zutateneinfuegen from "../../containers/Zutaten_einfügen/Zutateneinfuegen.jsx";
import Rezeptuebersicht from "../../containers/Rezept_Übersicht/Rezeptuebersicht.jsx";
import Rezept from "../../containers/Rezept/Rezept.jsx";

import './navigationszeile.css';

export function navigationszeile(probs) {

    let cocktails = {cocktails : probs.cocktails}
    let mojito = cocktails[1]

    return (
        <div id = "navigationArea">

            <nav>
                <Link to = "/zutateneinfuegen">
                    <Button id = "chooseingredients" variant = "contained" color = "default" size = "large" >
                        Zutaten einfügen
                    </Button>
                </Link>


                <Link to = "/rezeptuebersicht">
                    <Button id = "rezeptuebersicht" variant = "contained" color = "default" size = "large">
                        Rezeptübersicht
                    </Button>
                </Link>


                <Link to = "/rezept">
                    <Button id = "rezept" variant = "contained" color = "default" size = "large">
                        Rezept
                    </Button>
                </Link>

            </nav>

            {/* Switch to suiting page and load corresponding cocktail */}
            
            <Switch>
                
                <Route path = "/Zutateneinfuegen" render = {() => <Zutateneinfuegen {...probs} />} /> {/* replaced ...ingredients by ...probs */}

                <Route path = "/Rezeptuebersicht" render = {() => <Rezeptuebersicht {...probs} />} /> {/*replaced ...cocktails by ...props */}
                
                <Route path = "/Rezept" render = {() => <Rezept {...mojito} />} />

            </Switch>

        </div>
    );
}

