import React, { Component } from 'react';
import Character from '../components/app/Character';
import { fetchCharacterById } from '../services/heyArnoldApi';

export default class CharacterDetailContainer extends Component {
  state = {
    loading: true,
    character: {},
  };

  componentDidMount() {
    fetchCharacterById(this.props.match.params.id).then((character) =>
      this.setState({ loading: false, character })
    );
  }

  render() {
    console.log(this.state);
    return (
      <Character
        id={this.state.character.id}
        name={this.state.character.name}
        image={this.state.character.image}
      />
    );
  }
}
