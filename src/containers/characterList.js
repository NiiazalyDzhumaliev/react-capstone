import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import GetCharacterList from '../actions/characterListAction';

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
      const noImageURL =
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
      return characterList.data.map(character => (
        <ul key={uuidv4()}>
          <li>{character.name}</li>

          <Link to={`/character/${character.name}`}>View</Link>
          <img
            alt="marvel"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        </ul>
      ));
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
