// functional component

const apiURL = 'https://hey-arnold-api.herokuapp.com/api/v1/characters';

export const fetchCharacters = async () => {
  const response = await fetch(apiURL);
  const json = await response.json();

  return json.map((character) => ({
    id: character._id,
    name: character.name,
    image: character.image,
  }));
};
