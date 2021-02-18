import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { Link, useHistory } from 'react-router-dom';
import GetCharacterList from '../actions/characterListAction';

const characterList = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();
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
  return (
    <div>
      <div>
        <p>Search:</p>
        <input type="text" onChange={e => setSearch(e.target.value)} />
        <button
          type="button"
          onClick={() => history.push(`/character/${search}`)}
        >
          Submit
        </button>
      </div>
      {showData()}
    </div>
  );
};

export default characterList;
