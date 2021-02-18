const defaultState = {
  loading: false,
  data: {},
  error: '',
};

const characterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHARACTER_MULTIPLE_LOADING':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'CHARACTER_MULTIPLE_FAIL':
      return {
        ...state,
        loading: false,
        error: 'unable to find a character',
      };
    case 'CHARACTER_MULTIPLE_SUCCESS':
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
