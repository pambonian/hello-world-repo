import React, { Component } from "react";

class EsportsArticle extends Component {
    constructor(props) {
      super(props);
    }
    render() {

        return (
           <div>
        <article className="post" key={this.props.index}></article>
           <h1>Esports</h1>
           <div>
               <h1>{this.props.name}</h1>
               <p>{this.props.team}</p>
           </div>
       </div>
        );
      }
    }
   
    export default EsportsArticle;