import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route} from 'react-router-dom';

import Zutateneinfuegen from "../../containers/Zutaten_einfügen/Zutateneinfuegen.jsx";
import Rezeptuebersicht from "../../containers/Rezept_Übersicht/Rezeptuebersicht.jsx";
import Rezept from "../../containers/Rezept/Rezept.jsx";

import './navigationszeile.css';

export function navigationszeile(probs) {

    let Cocktails = {Cocktails : probs.Cocktails}
    let cosmopolitan = Cocktails.Cocktails[0]
    let maitai = Cocktails.Cocktails[2]
    let mintjulep = Cocktails.Cocktails[3]
    let mojito = Cocktails.Cocktails[1]
    let wodkasunrise = Cocktails.Cocktails[4]
    
    console.log("cosmopolitan", cosmopolitan)
    console.log("all cocktails", Cocktails)

    return (
        <div id = "navigationsbreich">

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
                
                <Route path = "/Rezept" render = {() => <Rezept {...cosmopolitan} />} />
                
                <Route path = "/cosmopolitan" render = {() => <Rezept {...cosmopolitan} />}  />

                <Route path = "/mai tai"  render = {() => <Rezept {...maitai} />} />

                <Route path = "/mint julep" render = {() => <Rezept {...mintjulep} />} />

                <Route path = "/mojito" render = {() => <Rezept {...mojito} />} />

                <Route path = "/wodka sunrise" render = {() => <Rezept {...wodkasunrise} />} />

            </Switch>

        </div>
    );
}