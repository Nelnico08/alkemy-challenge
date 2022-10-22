import { CLEAN_DETAIL_STATE, GET_MONTHS, GET_MONTHS_DETAIL } from "../actionsTypes";

const initialState = {
  months: [],
  detail: {},
  income:{},
  expense:{}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTHS:
      return{
        ...state,
        months: action.payload
      };
    case GET_MONTHS_DETAIL:
      return{
        ...state,
        detail: action.payload
      };
    case CLEAN_DETAIL_STATE:
      return{
        ...state,
        detail:{}
      };
    default:
      return state;
  }
};

export default rootReducer;