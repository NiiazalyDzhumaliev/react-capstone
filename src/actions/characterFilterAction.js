import axios from 'axios';
import url from '../constants/filteredListURL';

const GetCharacterFilteredList = (page, nameStarts) => async dispatch => {
  try {
    dispatch({
      type: 'CHARACTER_FILTERED_LIST_LOADING',
    });
    const result = await axios.get(url(page, nameStarts));
    dispatch({
      type: 'CHARACTER_FILTERED_LIST_SUCCESS',
      payload: result.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'CHARACTER_FILTERED_LIST_FAIL',
    });
  }
};

export default GetCharacterFilteredList;
