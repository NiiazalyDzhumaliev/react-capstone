const defaultState = {
  loading: false,
  data: {},
  error: '',
};

const characterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'POKEMON_MULTIPLE_LOADING':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'POKEMON_MULTIPLE_FAIL':
      return {
        ...state,
        loading: false,
        error: 'unable to find a character',
      };
    case 'POKEMON_MULTIPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        data: {
          ...state.data,
          [action.characterName]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default characterReducer;
