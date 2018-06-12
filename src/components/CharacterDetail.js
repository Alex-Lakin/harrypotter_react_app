import React from 'react';

const CharacterDetail = (props) => {
  if(!props.character) return null
  let pronouns = [];
  if (props.character.gender === "male"){
    pronouns = ["His", "his", "He", "he"]
  } else {
    pronouns = ["Her", "her", "She", "she"]
  }
  return (
    <div>
      <h3>{props.character.name} is a {props.character.species} {props.character.gender}.</h3>
      <h3>{pronouns[0]} house is {props.character.house} and {pronouns[3]} was born in {props.character.yearOfBirth}.</h3>
      <h3>{pronouns[2]} has {props.character.eyeColour} eyes and {pronouns[1]} hair is {props.character.hairColour}.</h3>
      <h3>{pronouns[0]} patronus is a {props.character.patronus}.</h3>
    </div>
  )
}

export default CharacterDetail;
