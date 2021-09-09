import React, { Component } from 'react';
import Characterlist from '../components/app/Characterlist';
import { fetchCharacters } from '../services/heyArnoldApi';

export default class HeyArnoldContainer extends Component {
  state = {
    loading: true,
    characters: [],
  };

  componentDidMount() {
    fetchCharacters().then((characters) =>
      this.setState({ loading: false, characters })
    );
  }

  render() {
    if (this.state.loading) {
      return <p>Loadin...!</p>;
    }
    return <Characterlist characters={this.state.characters} />;
  }
}
