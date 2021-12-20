import React, { Component } from 'react';

import ArticleBasketball from './ArticleBasketball';

const basketPlayer = {
    name: 'Steph Curry',
    team: 'Warriors'
  };
  
  const bballPayload = [{
    name: 'Basketball Player 2',
    team: 'Team 2'
  },
  {
    name: 'Basketball Player 3',
    team: 'Team 3'
  },
  {
    name: 'Basketball Player 4',
    team: 'Team 4'
  },
  {
    name: 'Basketball Player 5',
    team: 'Team 5'
  }
  ]

  const displaybballPlayerList = bballPayload.map((c, idx) => {
    return (
        <ArticleBasketball key={idx} index={idx} team={c.team} person={c.name} />
    )
})

class Basketball extends Component {
    render() {
        return (
            <div>
                <h1>Basketball</h1>
                <div>
                    <h1>{basketPlayer.name}</h1>
                    <p>{basketPlayer.team}</p>
                </div>
                {displaybballPlayerList}
            </div>
        )
    }
}

export default Basketball;