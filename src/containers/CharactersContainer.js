import React from 'react';
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetail from '../components/CharacterDetail'

class CharactersContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div>
        <h1>Character Container</h1>
        <CharacterSelector />
        <CharacterDetail />
      </div>
    );
  }
}

export default CharactersContainer;
