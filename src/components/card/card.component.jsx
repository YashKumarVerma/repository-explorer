import React from "react";

import "./card.styles.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${
            this.props.repository.id % 10
          }?set=set4&size=180x180`}
        />
        <h4> {this.props.repository.name} </h4>
      </div>
    );
  }
}

export default Card;
