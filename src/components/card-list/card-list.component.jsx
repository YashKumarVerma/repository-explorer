import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-list">
        {this.props.repositories.map((repo) => (
          <Card repository={repo} key={repo.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
