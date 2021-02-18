import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import GetCharacter from '../actions/characterAction';

const Character = () => {
  const { character } = useParams();
  const dispatch = useDispatch();
  // const characterState = useSelector(state => state.char);

  useEffect(() => {
    dispatch(GetCharacter(encodeURI(character)));
  }, []);

  return <div>{character}</div>;
};

export default Character;
