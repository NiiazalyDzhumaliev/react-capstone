import axios from 'axios';
import url from '../constants/listURL';

const GetCharacterList = page => async dispatch => {
  try {
    dispatch({
      type: 'CHARACTER_LIST_LOADING',
    });
    const result = await axios.get(url(page));
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
