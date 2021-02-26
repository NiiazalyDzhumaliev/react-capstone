import axios from 'axios';
import url from '../constants/charURL';

const GetCharacter = character => async dispatch => {
  try {
    dispatch({
      type: 'CHARACTER_MULTIPLE_LOADING',
    });
    const result = await axios.get(url(character));
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
