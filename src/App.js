import React from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searchBox/searchBox.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      repositories: [],
      query: "",
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/yashkumarverma/repos?per_page=100")
      .then((resp) => resp.json())
      .then((repositories) => this.setState({ repositories }));
  }

  render() {
    const { repositories, query } = this.state;
    const searchedRepositories = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(query.toLowerCase())
    );
    return (
      <>
        <h1>Github Repos</h1>
        <SearchBox
          placeholder="Search for repository"
          handleChange={(e) => this.setState({ query: e.target.value })}
        />
        <CardList repositories={searchedRepositories} />
      </>
    );
  }
}

export default App;
