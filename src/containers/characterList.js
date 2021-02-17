import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import GetCharacterList from '../actions/characterActions';

const characterList = () => {
  const dispatch = useDispatch();
  const characterList = useSelector(state => state.charList);
  const fetchData = (page = 1) => {
    dispatch(GetCharacterList(page));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const showData = () => {
    if (!_.isEmpty(characterList.data)) {
      return <p>have data</p>;
    }

    if (characterList.loading) {
      return <p>Loading...</p>;
    }

    if (characterList.error !== '') {
      return <p>{characterList.error}</p>;
    }
    return <p>Unable to get data</p>;
  };
  return <div>{showData()}</div>;
};

export default characterList;
