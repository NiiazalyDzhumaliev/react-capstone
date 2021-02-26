import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { Link, useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import GetCharacterList from '../actions/characterListAction';

const CharacterList = () => {
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
    const noImageURL = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
    return (
      <InfiniteScroll
        dataLength={characterList.data.length}
        next={() => fetchData(
          characterList.data.length / 15 === 1
            ? 2
            : characterList.data.length / 15,
        )}
        hasMore
        loader={<h4>Loading...</h4>}
      >
        {characterList.data.map(character => {
          if (
            noImageURL
            !== `${character.thumbnail.path}.${character.thumbnail.extension}`
          ) {
            return (
              <div key={uuidv4()}>
                <p>{character.name}</p>

                <Link to={`/character/${character.name}`}>View</Link>
                <img
                  alt="marvel"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
              </div>
            );
          }
          return null;
        })}
      </InfiniteScroll>
    );
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

export default CharacterList;
