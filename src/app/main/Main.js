import React from "react";
import Article from "../article/Article";
import straipsniai from "../straipsniai/straipsniai";

class Main extends React.Component {
    constructor(){
        super();  
      }
    render(){
        const visiStraipsniai = straipsniai.map(straipsnis => 
            <Article data = {{
                key:straipsnis.id,
                title:straipsnis.pavadinimas,
                description:straipsnis.aprasymas
            }}/>
        )
        return (
            <main>
            <div>{visiStraipsniai}</div>
            </main>
        )
    }
}

export default Main;