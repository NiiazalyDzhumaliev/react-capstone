const DefaultState = {
  loading: false,
  data: [],
  error: '',
};

const characterListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'CHARACTER_LIST_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CHARACTER_LIST_FAIL':
      return {
        ...state,
        loading: false,
        error: 'unable to get marvel characters',
      };
    case 'CHARACTER_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    default:
      return state;
  }
};

export default characterListReducer;
