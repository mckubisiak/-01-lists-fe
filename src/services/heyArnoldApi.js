// functional component

const apiURL = 'https://hey-arnold-api.herokuapp.com/api/v1/characters/';

export const fetchCharacters = async () => {
  const response = await fetch(apiURL);
  const json = await response.json();

  return json.map((character) => ({
    id: character._id,
    name: character.name,
    image: character.image,
  }));
};

export const fetchCharacterById = async (id) => {
  const response = await fetch(`${apiURL}${id}`);

  const json = await response.json();

  
  const details = { id: json._id, name: json.name, image: json.image };
  
  console.log(details);
  return details;
};
