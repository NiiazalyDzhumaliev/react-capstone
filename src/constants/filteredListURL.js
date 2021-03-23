import { timeStamp, publicKey, hashValue } from './api';

const getFilteredListURL = (page, nameStarts) => {
  const perPage = 15;
  const offset = page * perPage - perPage;
  const requestConstantCharacters = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameStarts}&limit=${perPage}&offset=${offset}`;
  const url = `${requestConstantCharacters}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
  return url;
};

export default getFilteredListURL;
