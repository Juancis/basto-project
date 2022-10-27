import * as types from "../actions/animals/types.js";

const initialState = {
  loading: false,
  animals: [],
  response: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true };

    case types.GET_ANIMALS:
      return { ...state, animals: action.payload, loading: false };

    case types.GET_ANIMAL:
      return { ...state, animals: action.payload, loading: false };

    case types.CREATE_ANIMAL:
      return { ...state, response: action.payload, loading: false };

    case types.DELETE_ANIMAL:
      return { ...state, response: action.payload, loading: false };

    case types.UPDATE_ANIMAL:
      return { ...state, response: action.payload, loading: false };

    case types.CLEAR_ANIMALS:
      return { ...state, animals: [] };

    default:
      return state;
  }
};

export default rootReducer;
