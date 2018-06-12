import React from 'react';
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetail from '../components/CharacterDetail'

class CharactersContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter : null
    };

    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    fetch(url)
      .then(res => res.json())
      .then(characterData => this.setState({characters: characterData}))
      .catch(error => console.log("Error", error))
  };

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index]
    this.setState( {currentCharacter: selectedCharacter} )
  }

  render(){
    return (
      <div>
        <h1>Character Container</h1>
        <CharacterSelector
          characters = {this.state.characters}
          onCharacterSelected = {this.handleCharacterSelected}
        />
        <CharacterDetail />
      </div>
    );
  }
}

export default CharactersContainer;
