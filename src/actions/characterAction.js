import axios from 'axios';
import { getApiHash } from 'marvel-api-hash-generator';

const GetCharacter = character => async dispatch => {
  try {
    dispatch({
      type: 'CHARACTER_MULTIPLE_LOADING',
    });
    const timeStamp = 1;
    const privateKey = 'c9384891527cc3bd72cab81dce560d18174a46bb';
    const publicKey = '14946262ad54655fac24826eeceeb49b';
    const hashValue = getApiHash(timeStamp, privateKey, publicKey);
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
