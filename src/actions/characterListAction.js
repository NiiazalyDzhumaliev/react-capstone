import axios from 'axios';
import { timeStamp, publicKey, hashValue } from '../constants/api';

const GetCharacterList = page => async dispatch => {
  try {
    dispatch({
      type: 'CHARACTER_LIST_LOADING',
    });
    const perPage = 15;
    const offset = page * perPage - perPage;
    const requestConstantCharacters = `https://gateway.marvel.com/v1/public/characters?limit=${perPage}&offset=${offset}`;
    const url = `${requestConstantCharacters}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
    const result = await axios.get(url);
    dispatch({
      type: 'CHARACTER_LIST_SUCCESS',
      payload: result.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'CHARACTER_LIST_FAIL',
    });
  }
};

export default GetCharacterList;
