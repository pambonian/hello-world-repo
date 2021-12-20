import React, { Component } from "react";

 class ArticleBasketball extends Component {
   constructor(props) {
     super(props);
   }

   render() {

     return (
        <div>
        <h1>Basketball</h1>
        <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.team}</p>
        </div>
    </div>
     );
   }
 }

 export default ArticleBasketball;