import React, { Component } from 'react';

const footballer = {
    name: 'Drew Brees',
    team: 'New Orleans Saints'
  };
  
  const footballPayload = [{
    name: 'Ricky Gervais',
    team: 'Tampa Bay Buccaneers'
  },
  {
    name: 'Tom Brady',
    team: 'Tampa Bay Buccaneers'
  },
  {
    name: 'Cooper Kupp',
    team: 'LA Rams'
  },
  {
    name: 'Harrison Butker',
    team: 'Kansas City'
  }
  ]

  
  const displayfootballers = footballPayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Name {player.name}</h1>
        <p>Team {player.team}</p>
      </div>
    );
  });

  class Football extends Component {
    render() {
        return (
            <div>
                <h1>Football</h1>
                <div>
                    <h1>{footballer.name}</h1>
                    <p>{footballer.team}</p>
                </div>
                {displayfootballers}
            </div>
        )
    }
}

export default Football;