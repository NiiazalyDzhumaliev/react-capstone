import { timeStamp, publicKey, hashValue } from './api';

const getCharacterURL = character => {
  const requestConstantCharacters = `https://gateway.marvel.com/v1/public/characters?name=${character}`;
  const url = `${requestConstantCharacters}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
  return url;
};

export default getCharacterURL;
