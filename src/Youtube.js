import React, { Component } from 'react';

const youtuber = {
    name: 'Chris Fix',
    team: 'Automotive Channel'
  };
  
  const youtubePayload = [{
    name: 'DIY Perks',
    team: 'DIY Channel'
  },
  {
    name: 'Colin Furze',
    team: 'DIY Channel'
  },
  {
    name: 'Captain Falcore',
    team: 'Gaming Channel'
  },
  {
    name: 'Better Ideas',
    team: 'Off-topic Channel'
  }
  ]

  const displayYoutubers = youtubePayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Name {player.name}</h1>
        <p>Team {player.team}</p>
      </div>
    );
  });

  class Youtube extends Component {
    render() {
        return (
            <div>
                <h1>Youtube</h1>
                <div>
                    <h1>{youtuber.name}</h1>
                    <p>{youtuber.team}</p>
                </div>
                {displayYoutubers}
            </div>
        )
    }
}

export default Youtube;