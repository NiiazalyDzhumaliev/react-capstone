import { timeStamp, publicKey, hashValue } from './api';

const getListURL = page => {
  const offset = page * 20 - 20;
  const requestConstantCharacters = `https://gateway.marvel.com/v1/public/characters?offset=${offset}`;
  const url = `${requestConstantCharacters}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
  return url;
};

export default getListURL;
