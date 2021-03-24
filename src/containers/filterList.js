import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GetCharacterFilteredList from '../actions/characterFilterAction';
import style from '../styles/CharList.module.css';

const CharacterFilteredList = props => {
  const { nameStarts } = props;
  const dispatch = useDispatch();
  const characterList = useSelector(state => state.charFilter);
  const fetchData = () => {
    dispatch(GetCharacterFilteredList(nameStarts));
  };
  useEffect(() => {
    fetchData();
  }, [nameStarts]);

  const showData = () => (
    <div className={style.char_container}>
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
    </div>
  );
  return <div>{showData()}</div>;
};

CharacterFilteredList.propTypes = {
  nameStarts: PropTypes.string.isRequired,
};

export default CharacterFilteredList;
