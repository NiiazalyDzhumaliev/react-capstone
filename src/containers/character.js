import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import GetCharacter from '../actions/characterAction';

const Character = () => {
  const { character } = useParams();
  const encodeChar = encodeURI(character);
  const dispatch = useDispatch();
  const characterState = useSelector(state => state.char);

  useEffect(() => {
    dispatch(GetCharacter(encodeChar));
  }, []);

  const showData = () => {
    if (!_.isEmpty(characterState.data[encodeChar])) {
      const charData = characterState.data[encodeChar][0];
      return (
        <div>
          <img
            alt="character portrait"
            src={`${charData.thumbnail.path}.${charData.thumbnail.extension}`}
          />
          <div>
            <p>{charData.description}</p>
          </div>
        </div>
      );
    }

    if (characterState.loading) {
      return <p>loading...</p>;
    }

    if (characterState.error !== '') {
      return <p>{characterState.error}</p>;
    }

    return <p>error getting character</p>;
  };

  return (
    <div>
      <h1>{character}</h1>
      {showData()}
    </div>
  );
};

export default Character;
