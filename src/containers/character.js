import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import GetCharacter from '../actions/characterAction';

const Character = () => {
  const { characterName } = useParams();
  const dispatch = useDispatch();
  const characterState = useSelector(state => state.char);

  useEffect(() => {
    dispatch(GetCharacter(characterName));
  }, []);

  return <div>Marvel Character</div>;
};

export default Character;
