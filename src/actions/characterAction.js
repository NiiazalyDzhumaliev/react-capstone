import axios from 'axios';
import { timeStamp, publicKey, hashValue } from '../constants/api';

const GetCharacter = character => async dispatch => {
  try {
    dispatch({
      type: 'CHARACTER_MULTIPLE_LOADING',
    });
    const requestConstantCharacters = `https://gateway.marvel.com/v1/public/characters?name=${character}`;
    const url = `${requestConstantCharacters}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
    const result = await axios.get(url);
    dispatch({
      type: 'CHARACTER_MULTIPLE_SUCCESS',
      payload: result.data.data.results,
      characterName: character,
    });
  } catch (error) {
    dispatch({
      type: 'CHARACTER_MULTIPLE_FAIL',
    });
  }
};

export default GetCharacter;
