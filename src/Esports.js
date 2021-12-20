import React, { Component } from 'react';

import EsportsArticle from './EsportsArticle';

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

  const displayPlayerMessages = esportsPayload.map((c, idx) => {
    return (
      <Article key={idx} index={idx} player={c.name} faction={c.team} />
    );
  });

  class Esports extends Component {
    intro() {
      console.log('I am from the Esports component....')
  }
    render() {
        return (
            <div>
              <div>
                <h1>Esports</h1>
                <div>
                    <h1>{teamMember.name}</h1>
                    <p>{teamMember.team}</p>
                    <EsportsArticle index={99} message={this.props.team} person={this.props.name} />
                </div>
                </div>
                {displayEsportPlayers}
            </div>
        )
    }
}

export default Esports;