import { timeStamp, publicKey, hashValue } from './api';

const getFilteredListURL = nameStarts => {
  const requestConstantCharacters = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameStarts}`;
  const url = `${requestConstantCharacters}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
  return url;
};

export default getFilteredListURL;
