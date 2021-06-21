import React, { Component } from "react";
import Game from "./data.json";

const games = Game.map(
    (Game) => 
    {
        return(
            <div key={Game.title} className="card mb-3 bg-light">
                  <h2 className="card-title text-center">{Game.title}</h2>
                <div className="text-center">
  <img src={Game.image} className="rounded img-fluid" alt=""></img></div>
  <div className="card-body">

  <h3 className="card-title">{Game["heading-1"]}</h3>
    <p className="card-text">{Game["paragraph-1"]}</p>
    <h3 className="card-title">{Game["heading-2"]}</h3>
    <p className="card-text">{Game["paragraph-2"]}</p>
    <h3 className="card-title">{Game["heading-3"]}</h3>
    <p className="card-text">{Game["paragraph-3"]}</p>
  </div>
</div>
       
            );
    }
);

class Content extends Component {
    render() {
        return (
            <div>
                
        {games}
            </div>            
                );
    }
}

export default Content;
