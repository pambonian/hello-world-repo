import React, { Component } from 'react';

const driver = {
    name: 'Lewis Hamilton',
    team: 'Mercedes'
  };
  
  const payload = [{
    name: 'Driver 2',
    team: 'Team 2'
  },
  {
    name: 'Driver 3',
    team: 'Team 3'
  },
  {
    name: 'Driver 4',
    team: 'Team 4'
  },
  {
    name: 'Driver 5',
    team: 'Team 5'
  }
  ]

class Racing extends Component {
    render() {
        return (
            <div>
                <h1>Racing</h1>
                <div>
                    <h1>{driver.name}</h1>
                    <p>{driver.team}</p>
                </div>
                {displayDrivers}
            </div>
        )
    }
}
  
  const displayDrivers = payload.map((driver, idx) => {
    return(
      <div key={idx}>
        <h1>Name {driver.name}</h1>
        <p>Team {driver.team}</p>
      </div>
    );
  });

export default Racing;