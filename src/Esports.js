import React, { Component } from 'react';

const teamMember = {
    name: 'Ogre 2',
    team: 'Final Boss'
  };
  
  const esportsPayload = [{
    name: 'Lethul',
    team: 'Faze'
  },
  {
    name: 'SNIP3DOWN',
    team: 'Faze'
  },
  {
    name: 'Lunchbox',
    team: 'Cloud9'
  },
  {
    name: 'Ogre 1',
    team: 'Final Boss'
  }
  ]

  const displayEsportsPlayers = esportsPayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Name {player.name}</h1>
        <p>Team {player.team}</p>
      </div>
    );
  });

  class Esports extends Component {
    render() {
        return (
            <div>
                <h1>Esports</h1>
                <div>
                    <h1>{teamMember.name}</h1>
                    <p>{teamMember.team}</p>
                </div>
                {displayEsportsPlayers}
            </div>
        )
    }
}

export default Esports;