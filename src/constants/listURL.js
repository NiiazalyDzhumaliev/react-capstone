import { timeStamp, publicKey, hashValue } from './api';

const getListURL = page => {
  const perPage = 15;
  const offset = page * perPage - perPage;
  const requestConstantCharacters = `https://gateway.marvel.com/v1/public/characters?limit=${perPage}&offset=${offset}`;
  const url = `${requestConstantCharacters}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
  return url;
};

export default getListURL;
