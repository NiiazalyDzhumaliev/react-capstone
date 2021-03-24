const DefaultState = {
  loading: false,
  data: [],
  error: '',
  count: 0,
};

const characterFilterReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'CHARACTER_FILTERED_LIST_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CHARACTER_FILTERED_LIST_FAIL':
      return {
        ...state,
        loading: false,
        error: 'unable to get marvel characters',
      };
    case 'CHARACTER_FILTERED_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        error: '',
        count: action.payload.total,
      };
    default:
      return state;
  }
};

export default characterFilterReducer;
