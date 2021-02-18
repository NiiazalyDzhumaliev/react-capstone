import axios from 'axios';
import { getApiHash } from 'marvel-api-hash-generator';

const GetCharacterList = page => async dispatch => {
  try {
    dispatch({
      type: 'CHARACTER_LIST_LOADING',
    });
    const timeStamp = 1;
    const privateKey = 'c9384891527cc3bd72cab81dce560d18174a46bb';
    const publicKey = '14946262ad54655fac24826eeceeb49b';
    const hashValue = getApiHash(timeStamp, privateKey, publicKey);
    const perPage = 15;
    const offset = page * perPage - perPage;
    const requestConstantCharacters = `https://gateway.marvel.com/v1/public/characters?limit=${perPage}&offset=${offset}`;
    const url = `${requestConstantCharacters}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
    const result = await axios.get(url);
    dispatch({
      type: 'CHARACTER_LIST_SUCCESS',
      payload: result.data.data,
    });
    console.log(result.data.data.total);
  } catch (error) {
    dispatch({
      type: 'CHARACTER_LIST_FAIL',
    });
  }
};

export default GetCharacterList;
