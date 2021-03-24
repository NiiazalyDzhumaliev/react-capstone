import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import CharacterFilteredList from './filterList';
import GetCharacterList from '../actions/characterListAction';
import style from '../styles/CharList.module.css';

const CharacterList = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const characterList = useSelector(state => state.charList);
  const fetchData = (page = 1) => {
    dispatch(GetCharacterList(page));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const showData = () => (
    <InfiniteScroll
      dataLength={characterList.data.length}
      next={() => fetchData(
        characterList.data.length / 20 === 1
          ? 2
          : characterList.data.length / 20,
      )}
      hasMore
      loader={<h4>Loading...</h4>}
      scrollThreshold={1}
      className={style.char_container}
    >
      {characterList.data.map(character => (
        <div key={uuidv4()}>
          <p className={style.char_name}>{character.name}</p>

          <Link to={`/character/${character.name}`}>
            {' '}
            <img
              className={style.char_image}
              alt="marvel"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          </Link>
        </div>
      ))}
    </InfiniteScroll>
  );
  return (
    <div>
      <div>
        <p>Search:</p>
        <input type="text" onChange={e => setSearch(e.target.value)} />
      </div>
      {search ? <CharacterFilteredList nameStarts={search} /> : showData()}
    </div>
  );
};

export default CharacterList;
